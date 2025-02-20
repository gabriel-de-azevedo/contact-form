import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = () => {
    reset();
    toast(
      "Message Sent! Thanks for completing the form. We'll be in touch soon!",
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact Us</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          {...register("firstName", { required: "This field is required" })}
        />
        {errors.firstName && <p role="alert">{errors.firstName?.message}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          {...register("lastName", { required: "This field is required" })}
        />
        {errors.lastName && <p role="alert">{errors.lastName?.message}</p>}
      </div>
      <div>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          id="emailAddress"
          {...register("emailAddress", {
            required: "This field is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.emailAddress && (
          <p role="alert">{errors.emailAddress?.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="queryType">Query Type</label>
        <div>
          <input
            type="radio"
            id="generalEnquiry"
            value="generalEnquiry"
            {...register("queryType", {
              required: "Please select a query type",
            })}
          />
          <label htmlFor="generalEnquiry">General Enquiry</label>
        </div>
        <div>
          <input
            type="radio"
            id="supportRequest"
            value="supportRequest"
            {...register("queryType", {
              required: "Please select a query type",
            })}
          />
          <label htmlFor="supportRequest">Support Request</label>
        </div>
        {errors.queryType && <p role="alert">{errors.queryType?.message}</p>}
      </div>
      <div>
        <label htmlFor="userMessage">Message</label>
        <textarea
          id="userMessage"
          {...register("userMessage", { required: "This field is required" })}
        ></textarea>
        {errors.userMessage && (
          <p role="alert">{errors.userMessage?.message}</p>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          id="consentToContact"
          {...register("consentToContact", {
            required: "To submit this form, please consent to being contacted",
          })}
        />
        <label htmlFor="consentToContact">
          I consent to being contacted by the team
        </label>
        {errors.consentToContact && (
          <p role="alert">{errors.consentToContact?.message}</p>
        )}
      </div>
      <button type="submit">Submit</button>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
