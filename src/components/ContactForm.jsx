import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast("Message Sent!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-karla">
      <h1>Contact Us</h1>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" {...register("first-name")} />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" {...register("last-name")} />
      </div>
      <div>
        <label htmlFor="email-address">Email Address</label>
        <input type="email" id="email-address" {...register("email-address")} />
      </div>
      <div>
        <label htmlFor="query-type">Query Type</label>
        <div>
          <input
            type="radio"
            id="general-enquiry"
            value="general-enquiry"
            {...register("query-type")}
          />
          <label htmlFor="general-enquiry">General Enquiry</label>
        </div>
        <div>
          <input
            type="radio"
            id="support-request"
            value="support-request"
            {...register("query-type")}
          />
          <label htmlFor="support-request">Support Request</label>
        </div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message")}></textarea>
      </div>
      <div>
        <input
          type="checkbox"
          id="consent-to-contact"
          {...register("consent-to-contact")}
        />
        <label htmlFor="consent-to-contact">
          I consent to being contacted by the team
        </label>
      </div>
      <button type="submit">Submit</button>
      <ToastContainer />
      {/* Contact Us

        First Name
        This field is required

        Last Name
        This field is required

        Email Address
        Please enter a valid email address
        This field is required

        Query Type
        General Enquiry
        Support Request
        Please select a query type

        Message
        This field is required

        I consent to being contacted by the team
        To submit this form, please consent to being contacted

        Submit

        Message Sent!
        Thanks for completing the form. We'll be in touch soon! */}
    </form>
  );
}

export default ContactForm;
