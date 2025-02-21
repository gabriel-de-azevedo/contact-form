function FormRadio({ text, ...props }) {
  return (
    <label>
      <input type="radio" {...props} />
      {text}
    </label>
  );
}

export default FormRadio;
