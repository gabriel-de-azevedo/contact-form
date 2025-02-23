function FormButton({ text }) {
  return (
    <button
      className="cursor-pointer rounded-lg bg-green-600 p-4 font-bold text-white hover:bg-green-900 hover:shadow-md focus:bg-green-900"
      type="submit"
    >
      {text}
    </button>
  );
}

export default FormButton;
