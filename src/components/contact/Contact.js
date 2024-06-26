import React, { useState } from "react";
import Title from "../home/Title";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // error messages
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessages] = useState(false);
  // error messages end
  const [successMsg, setSuccessMsg] = useState("");
  // email validation

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 flex justify-between gap-20">
        <div className="w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:{" "}
            </span>{" "}
            Depok, Jawa Barat
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:{" "}
            </span>{" "}
            +62 838-7177-5579
          </p>
        </div>
        <div className="w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:{" "}
            </span>{" "}
            <span className="text-sm">cintaazera072@gmail.com</span>
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:{" "}
            </span>{" "}
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        <form className="p-6 flex flex-col gap-6">
          <div className="w-full flex gap-10 justify-between">
            <input
              onChange={handleName}
              value={clientName}
              className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
              type="text"
              placeholder="Full Name"
            />
            <input
              onChange={handleEmail}
              value={email}
              className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <textarea
            onChange={handleMessages}
            value={messages}
            className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 resize-none"
            cols="30"
            placeholder="Your Message"
            rows="4"
          ></textarea>
          <button
            onClick={handleSend}
            className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
          >
            Send Message <span className="text-designColor">{<FiSend />}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
