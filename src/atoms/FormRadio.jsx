function FormRadio({ text, ...props }) {
  return (
    <label className="flex w-full cursor-pointer gap-2 rounded-lg border-1 border-gray-500 p-2.75 has-checked:border-green-600 has-checked:bg-green-200">
      <input className="cursor-pointer" type="radio" {...props} />
      {text}
    </label>
  );
}

export default FormRadio;
