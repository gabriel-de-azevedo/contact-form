function FormButton({ text }) {
  return (
    <button
      className="cursor-pointer rounded-lg bg-green-600 p-4 font-bold text-white"
      type="submit"
    >
      {text}
    </button>
  );
}

export default FormButton;
