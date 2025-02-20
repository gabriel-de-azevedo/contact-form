function ContactForm() {
  return (
    <form className="font-karla">
      <h1>Contact Us</h1>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" />
      </div>
      <div>
        <label htmlFor="email-address">Email Address</label>
        <input type="email" name="email-address" id="email-address" />
      </div>
      <div>
        <label htmlFor="query-type">Query Type</label>
        <div>
          <input
            type="radio"
            id="general-enquiry"
            name="query-type"
            value="general-enquiry"
          />
          <label htmlFor="general-enquiry">General Enquiry</label>
        </div>
        <div>
          <input
            type="radio"
            id="support-request"
            name="query-type"
            value="support-request"
          />
          <label htmlFor="support-request">Support Request</label>
        </div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
      </div>
      <div>
        <input
          type="checkbox"
          name="consent-to-contact"
          id="consent-to-contact"
        />
        <label htmlFor="consent-to-contact">
          I consent to being contacted by the team
        </label>
      </div>
      <button type="submit">Submit</button>
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
