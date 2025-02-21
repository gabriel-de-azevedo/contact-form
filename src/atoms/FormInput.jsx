function FormInput({ error, ...props }) {
  return (
    <input
      className={`rounded-lg border-1 border-gray-500 p-2.75 focus:border-green-600 focus:outline-1 focus:outline-green-600 ${error && "border-red focus:border-red focus:outline-red"}`}
      {...props}
    />
  );
}

export default FormInput;
