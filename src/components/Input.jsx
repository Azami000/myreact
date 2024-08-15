
export const Input = ({ placeholder, value, handler }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(event) => handler(event.target.value)}
    />
  );
};
