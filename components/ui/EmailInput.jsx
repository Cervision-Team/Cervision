"use client";

import { useState } from "react";
import Image from "next/image";
import FooterArrow from "../../public/svg/FooterArrow.svg";

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
    <div className="flex flex-col items-center sm:items-start">
      <div className="relative w-full max-w-[320px] flex justify-center sm:justify-start">
        <input
          type="text"
          placeholder="Buraya yazın...."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[50px] sm:h-[60px] pl-4 sm:pl-5 pr-14 sm:pr-20 rounded-full text-black shadow-md outline-none bg-white placeholder-gray-400 text-sm sm:text-base focus:placeholder-transparent"
        />
        <button
          onClick={handleSend}
          disabled={isSending}
          className={`absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 w-9 h-9 sm:w-10.5 sm:h-10.5 rounded-full flex items-center justify-center ${
            isSending ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
          }`}
        >
          {isSending ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Image
              src={FooterArrow}
              alt="Submit"
              width={18}
              height={18}
              className="sm:w-[20px] sm:h-[20px]"
            />
          )}
        </button>
      </div>
      {status && <p className="mt-2 text-sm text-white">{status}</p>}
    </div>
  );
};

export default EmailInput;
