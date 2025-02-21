function FormTextarea({ error, ...props }) {
  return (
    <textarea
      className={`min-h-60 rounded-lg border-1 border-gray-500 p-2.75 sm:min-h-25 ${error && "border-red"}`}
      {...props}
    />
  );
}

export default FormTextarea;
