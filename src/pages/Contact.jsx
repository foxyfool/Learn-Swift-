import React from "react";

import Footer from "../components/Common/Footer";
import ReviewSlider from "../components/Common/ReviewSlider";
import ContactDetails from "../components/core/ContactUsPage/ContactDetails";
import ContactForm from "../components/core/ContactUsPage/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-1 rounded-xl text-white">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Review's from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
