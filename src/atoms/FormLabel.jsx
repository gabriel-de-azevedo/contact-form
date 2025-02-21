import FormError from "./FormError";

function FormLabel({ text, error, children }) {
  return (
    <label>
      {text}
      {children}
      <FormError error={error} />
    </label>
  );
}

export default FormLabel;
