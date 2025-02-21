import FormError from "./FormError";
import FormRequiredSymbol from "./FormRequiredSymbol";

function FormCheckbox({ text, error, required, ...props }) {
  return (
    <label className="flex gap-4 py-3">
      <input type="checkbox" {...props} />
      <p>
        {text}
        {required && <FormRequiredSymbol />}
      </p>
      <FormError error={error} />
    </label>
  );
}

export default FormCheckbox;
