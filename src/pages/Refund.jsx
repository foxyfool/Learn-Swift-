import React from "react";

const Refund = () => {
  return (
    <div className="text-white flex flex-col items-center space-y-8">
      <h2 className="text-3xl font-bold mt-10">Refund & Cancellation </h2>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-start gap-10 gap-x-2 text-white">
        <p>
          You are entitled to a refund in the case of the purchased course not
          being assigned to you within the expiration date from your date of
          purchase or if you have paid twice for the same course.
          <br />
          Under any other circumstance, we will not consider any requests for
          refund as this is a digital course purchase.
        </p>
      </div>
    </div>
  );
};

export default Refund;
