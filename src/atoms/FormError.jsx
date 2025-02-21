function FormError({ error }) {
  return (
    <>
      {error && (
        <p className="text-red" role="alert">
          {error?.message}
        </p>
      )}
    </>
  );
}

export default FormError;
