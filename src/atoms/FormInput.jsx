function FormInput({ error, ...props }) {
  return (
    <input
      className={`rounded-lg border-1 border-gray-500 p-2.75 ${error && "border-red"}`}
      {...props}
    />
  );
}

export default FormInput;
