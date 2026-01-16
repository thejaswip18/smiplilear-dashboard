"use client";

import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { submitRSVP } from "./backend/submitRSVP"; 

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting..." });

    const formData = new FormData();
    formData.append("email", email);

    const result = await submitRSVP(formData);

    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) setEmail(""); 
  };

  return (
    <section
      className="w-full md:h-[475px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="relative z-10 h-full mx-auto max-w-[1440px] px-5 sm:px-8 md:px-20 py-6 md:py-10 text-white flex flex-col justify-between">
        
        <div>
          <p className="font-bold text-[18px] md:text-[22px] md:leading-[30px] font-semibold mb-10">
            Space is limited.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:gap-3"
          >
            <div className="relative w-[398px] md:w-[606px] bg-[#E7E7E7] rounded-sm">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BDBDBD]">
                <MdOutlineEmail className="md:w-[33px] md:h-[26px]" />
              </span>

              <input
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[45px] md:h-[81px] w-full rounded-md border border-[#D1D5DB] pl-14 pr-4 font-satoshi text-[13px] md:text-[15px] text-[#333333] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#F5AB40]"
              />
            </div>

            <button
              type="submit"
              className="h-[45px] md:h-[81px] w-[139px] md:w-[251px] rounded-md bg-[#F5AB40] font-satoshi font-semibold text-white text-[14px] md:text-[16px] hover:bg-[#e29a35] transition"
            >
              RSVP Now
            </button>
          </form>

          {status && (
            <p
              className={`font-satoshi mb-4 ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-4 text-[10px] md:text-[12px] text-white/80">
          <div className="flex items-center text-white md:w-[280px] md:h-[80px]">
            <span className="font-satoshi text-[30px] md:text-[60px] font-light leading-none">
              s
            </span>
            <span className="mx-1 flex flex-col items-center gap-[4px]">
              <span className="block w-[4px] md:w-[6px] h-[3px] md:h-[7px] bg-white"></span>
              <span className="block w-[4px] md:w-[6px] h-[17px] md:h-[33px] bg-white"></span>
            </span>
            <span className="font-satoshi text-[30px] md:text-[60px] font-light leading-none">
              mp
            </span>
            <span className="mx-1 flex items-center">
              <span className="block w-[4px] md:w-[6px] h-[30px] md:h-[50px] bg-white"></span>
            </span>
            <span className="flex flex-col items-center gap-[4px] mt-7">
              <span className="block w-[4px] md:w-[6px] h-[3px] md:h-[7px] bg-white"></span>
              <span className="block w-[4px] md:w-[6px] h-[17px] md:h-[33px] bg-white"></span>
            </span>
            <span className="mx-1 flex items-center">
              <span className="block w-[4px] md:w-[6px] h-[30px] md:h-[50px] bg-white"></span>
            </span>
            <span className="font-satoshi text-[30px] md:text-[60px] font-light leading-none">
              earn
            </span>
          </div>

          <span className="text-left md:text-right">
            © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
          </span>
        </div>

      </div>
    </section>
  );
}
