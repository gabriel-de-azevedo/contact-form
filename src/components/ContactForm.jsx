import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import FormLabel from "../atoms/FormLabel";
import FormInput from "../atoms/FormInput";
import FormRadio from "../atoms/FormRadio";
import FormTextarea from "../atoms/FormTextarea";
import FormCheckbox from "../atoms/FormCheckbox";
import FormButton from "../atoms/FormButton";
import FormToast from "../atoms/FormToast";

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = () => {
    reset();
    toast(<FormToast />);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-2xl flex-col flex-wrap gap-6 rounded-2xl bg-white p-6 font-normal text-gray-900 accent-green-600"
    >
      <h1 className="py-1 text-3xl font-bold">Contact Us</h1>
      <div className="flex flex-col gap-6 sm:flex-row">
        <FormLabel text="First Name" error={errors.firstName} required>
          <FormInput
            error={errors.firstName}
            {...register("firstName", { required: "This field is required" })}
          />
        </FormLabel>
        <FormLabel text="Last Name" error={errors.lastName} required>
          <FormInput
            error={errors.lastName}
            {...register("lastName", { required: "This field is required" })}
          />
        </FormLabel>
      </div>
      <FormLabel text="Email Address" error={errors.emailAddress} required>
        <FormInput
          error={errors.emailAddress}
          {...register("emailAddress", {
            required: "This field is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormLabel>
      <FormLabel text="Query Type" error={errors.queryType} required>
        <div className="flex flex-col gap-6 sm:flex-row">
          <FormRadio
            text="General Enquiry"
            value="generalEnquiry"
            {...register("queryType", {
              required: "Please select a query type",
            })}
          />
          <FormRadio
            text="Support Request"
            value="supportRequest"
            {...register("queryType", {
              required: "Please select a query type",
            })}
          />
        </div>
      </FormLabel>
      <FormLabel text="Message" error={errors.userMessage} required>
        <FormTextarea
          error={errors.userMessage}
          {...register("userMessage", { required: "This field is required" })}
        />
      </FormLabel>
      <FormCheckbox
        required
        text="I consent to being contacted by the team"
        error={errors.consentToContact}
        {...register("consentToContact", {
          required: "To submit this form, please consent to being contacted",
        })}
      />
      <FormButton text="Submit" />
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeButton={false}
        toastClassName="!p-0 !w-fit"
        closeOnClick={true}
        aria-label="Message Sent"
      />
    </form>
  );
}

export default ContactForm;
