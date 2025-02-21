import FormError from "./FormError";
import FormRequiredSymbol from "./FormRequiredSymbol";

function FormCheckbox({ text, error, required, ...props }) {
  return (
    <label className="flex flex-col gap-2 py-3">
      <div className="flex gap-4">
        <input type="checkbox" {...props} />
        <p>
          {text}
          {required && <FormRequiredSymbol />}
        </p>
      </div>
      <FormError error={error} />
    </label>
  );
}

export default FormCheckbox;
