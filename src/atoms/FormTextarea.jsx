function FormTextarea({ ...props }) {
  return (
    <textarea
      className="min-h-60 rounded-lg border-1 border-gray-500 p-2.75 sm:min-h-25"
      {...props}
    />
  );
}

export default FormTextarea;
