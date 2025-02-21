import FormError from "./FormError";

function FormCheckbox({ text, error, ...props }) {
  return (
    <div>
      <label>
        <input type="checkbox" {...props} />
        {text}
        <FormError error={error} />
      </label>
    </div>
  );
}

export default FormCheckbox;
