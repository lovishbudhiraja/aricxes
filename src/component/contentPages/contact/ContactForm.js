import React from "react";
import { WiStars } from "react-icons/wi";
import FormElements from "./FromElements";

function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      <div className="flex flex-col w-full">
        <sub className="font-juliet text-xl text-orange-700 flex items-center gap-1">
          <WiStars /> Contact us
        </sub>
        <h2 className="font-fira text-3xl lg:text-5xl lg:leading-snug -text--title-color font-bold">
          Our team is always available to help you
        </h2>
        <p className="text-lg font-light -text--title-color/55 mt-5">
          That’s fantastic to hear! Having a reliable team ready to assist
          ensures smooth operations and swift problem-solving. Your dedication
          is invaluable to our collective success.
        </p>
        <div className="w-full mt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.566735358265!2d77.17414750989923!3d28.71555695945192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f48ef15b0d%3A0xf300b6a4cc837fa!2s299%2C%20North%2C%20Block%20A%2C%20A%20Block%2C%20Panchwathi%2C%20Jahangirpuri%2C%20New%20Delhi%2C%20Delhi%2C%20110033!5e0!3m2!1sen!2sin!4v1735635890882!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Aricxes Adress"
          ></iframe>
        </div>
      </div>

      <div className="bg-[#f7f7f7] border border-[#E3E3E3] rounded-[20px] py-6 px-4 md:px-9 w-full">
        <h2 className="font-fira text-xl lg:text-3xl lg:leading-snug -text--title-color font-bold mb-5">
          Get In Touch
        </h2>
        <FormElements />
      </div>
    </div>
  );
}

export default ContactForm;
