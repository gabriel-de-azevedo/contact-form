function FormTextarea({ error, ...props }) {
  return (
    <textarea
      className={`min-h-60 rounded-lg border-1 border-gray-500 p-2.75 hover:shadow-md focus:border-green-600 focus:outline-1 focus:outline-green-600 sm:min-h-25 ${error && "border-red focus:border-red focus:outline-red"}`}
      {...props}
    />
  );
}

export default FormTextarea;
