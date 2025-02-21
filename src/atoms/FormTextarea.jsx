function FormTextarea({ error, ...props }) {
  return (
    <textarea
      className={`min-h-60 rounded-lg border-1 border-gray-500 p-2.75 hover:border-green-600 hover:outline-1 hover:outline-green-600 focus:border-green-600 focus:outline-1 focus:outline-green-600 sm:min-h-25 ${error && "border-red hover:border-red hover:outline-red focus:border-red focus:outline-red"}`}
      {...props}
    />
  );
}

export default FormTextarea;
