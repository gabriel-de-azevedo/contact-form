function FormRadio({ text, ...props }) {
  return (
    <label className="flex w-full gap-2 rounded-lg border-1 border-gray-500 p-2.75">
      <input type="radio" {...props} />
      {text}
    </label>
  );
}

export default FormRadio;
