import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <>
      <div className="h-auto lg:h-[500px] pt-28 pb-20 lg:pb-0 bg-[url('https://res.cloudinary.com/dfvonhupq/image/upload/v1735457385/Group_23_h4kcrs.png')] bg-cover flex align-middle border-b-4 -border--base-color">
        <div className="wrapper">
          <h1 className="text-white lg:text-7xl text-3xl font-extrabold">
            Contact Us
          </h1>
        </div>
      </div>

      <section className="">
        <div className="wrapper flex flex-col gap-28">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactUs;
