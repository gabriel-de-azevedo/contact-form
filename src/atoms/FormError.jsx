function FormError({ error }) {
  return <>{error && <p role="alert">{error?.message}</p>}</>;
}

export default FormError;
