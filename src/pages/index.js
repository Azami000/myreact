import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Layout } from "@/components/Layout";
import { Title } from "@/components/Title";
import { useState } from "react";

const Home = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        text: todoInput,
        isDone: false,
        id: "id" + Math.random().toString(16).slice(2),
      },
    ]);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleChange = (id) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    setTodo(updatedTodo);
  };

  return (
    <div>
      <Layout>
        <Title />
        <Input
          placeholder={"New task"}
          value={todoInput}
          handler={setTodoInput}
        />
        <Button handleClick={handleClick} />
        {todo.map((el, index) => {
          return (
            <div key={index}>
              <span
                style={{
                  textDecoration: el.isDone === true ? "line-through" : "none",
                }}
              >
                {el.text}
              </span>
              <input
                type="checkbox"
                checked={el.isDone}
                onChange={() => handleChange(el.id)}
              />
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

export default Home;
