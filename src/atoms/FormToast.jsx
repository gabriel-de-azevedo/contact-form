function FormToast() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-green-900 p-7 text-white">
      <span className="flex gap-3">
        <img src="src/assets/icon-success-check.svg" alt="Success Check Icon" />
        <strong>Message Sent!</strong>
      </span>
      <p>{"Thanks for completing the form. We'll be in touch soon!"}</p>
    </div>
  );
}

export default FormToast;
