import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-black text-white rounded-2xl p-11 lg:p-14 flex gap-3 flex-col bg-black ">
      <h1 className="text-4xl leading-10 font-semibold text-white">
        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
