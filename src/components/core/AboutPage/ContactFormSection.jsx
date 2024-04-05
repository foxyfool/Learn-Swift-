import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto bg-black rounded-2xl p-10 m-4">
      <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
      <p className="text-center text-white mt-3">
        We Would love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
