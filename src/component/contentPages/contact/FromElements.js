import React, { useRef, useState } from "react";
import FromInput from "./FromInput";
import Buttons from "../../../utils/Buttons";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import Notification from "../../../utils/Notification";

function FromElements() {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fl0ldps", "template_ddg2dog", form.current, {
        publicKey: "0g07i1IBPFCpUZx05",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          setUserEmail("");
          setUserName("");
          setUserNumber("");
          setUserMessage("");
          setSuccessMessage(!successMessage);
        },
        (error) => {
          // console.log("FAILED...", error.text);
        }
      );
  };

  const closeToast = () => {
    setSuccessMessage(!successMessage);
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full"
      >
        <FromInput
          placeholder="Your Fullname"
          type="text"
          req={"required"}
          name={"user_name"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <FromInput
          placeholder="Phone Number"
          type="tel"
          req={"required"}
          name={"user_number"}
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <FromInput
          placeholder="Email ID"
          type="email"
          req={"required"}
          name={"user_email"}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <div className="flex flex-col gap-1">
          <textarea
            className="bg-white rounded-[20px] py-2 px-8 text-lg font-light -text--title-color/55 shadow-sm focus:outline-[#999999]"
            cols="40"
            rows="10"
            maxLength="2000"
            placeholder="Write Your Requirements..."
            req={"required"}
            name="user_message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <span className="text-red-600 hidden">This is error</span>
        </div>

        <Buttons
          classprop={
            "relative mr-auto text-white inline-flex items-center justify-center py-5 text-base px-9 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
          }
          textname={"Submit Your Query"}
          iconName={<IoIosSend className="text-lg" />}
        />
      </form>
      <Notification
        addClass={successMessage ? "opacity-100 block" : "opacity-0 hidden"}
        message={
          "We got your Message, Our team will connect with you Shortly, THANKYOU!"
        }
        close={closeToast}
      />
    </>
  );
}

export default FromElements;
