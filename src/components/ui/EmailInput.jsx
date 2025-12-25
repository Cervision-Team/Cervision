"use client";

import { useState } from "react";
import Image from "next/image";
import FooterArrow from "../../../public/svg/FooterArrow.svg";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!email) return alert("Please enter your email.");

    setIsSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Email sent successfully!");
        setEmail("");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    } finally {
      setIsSending(false);
    }
  };

  return (
<div className="flex flex-col">
      <div className="relative w-full flex">
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[40px] sm:h-[50px] lg:h-[60px] pl-3 sm:pl-4 lg:pl-5 pr-12 sm:pr-14 lg:pr-20 rounded-full text-black shadow-md outline-none bg-white placeholder-gray-400 text-xs sm:text-sm lg:text-base focus:placeholder-transparent"
        />
        <button
          onClick={handleSend}
          disabled={isSending}
          className={`absolute top-1/2 right-2 sm:right-3 lg:right-4 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 lg:w-10.5 lg:h-10.5 rounded-full flex items-center justify-center ${
            isSending ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
          }`}
        >
          {isSending ? (
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Image
              src={FooterArrow}
              alt="Submit"
              width={14}
              height={14}
              className="sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]"
            />
          )}
        </button>
      </div>
      {status && <p className="mt-2 text-xs sm:text-sm text-white">{status}</p>}
    </div>
      );
};

export default EmailInput;
