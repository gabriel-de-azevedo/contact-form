import FormError from "./FormError";
import FormRequiredSymbol from "./FormRequiredSymbol";

function FormLabel({ text, error, required, children }) {
  return (
    <label className="flex w-full flex-col gap-2">
      <p>
        {text}
        {required && <FormRequiredSymbol />}
      </p>
      {children}
      <FormError error={error} />
    </label>
  );
}

export default FormLabel;
