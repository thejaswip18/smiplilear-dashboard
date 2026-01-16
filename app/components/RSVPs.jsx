"use client"; 

import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { submitRSVP } from "./backend/submitRSVP";

export default function RSVPs() {
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
    <section className="w-full bg-white px-5 sm:px-8 md:px-20 py-12 md:py-16">
      <div className="mx-auto max-w-[1240px]">
        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:gap-3"
        >
          <div className="relative w-[398px] md:w-[606px] bg-[#E7E7E7]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BDBDBD]">
              <MdOutlineEmail className="md:w-[33px] md:h-[26px]" />
            </span>

            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email to confirm your attendance"
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
            className={`mb-4 font-satoshi ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}

        <div className="flex flex-col items-center md:items-start">
          <p className="mb-6 font-satoshi text-[15px] leading-[24px] md:text-[27px] md:leading-[35px] text-[#444444] max-w-full">
            AI is accelerating change across every operational layer. Roles are
            shifting. Leadership models are collapsing and reforming. Frontline
            and mid-level managers will soon lead teams of people and intelligent
            agents.
          </p>

          <p className="mb-8 font-satoshi text-[15px] leading-[24px] md:text-[27px] md:leading-[35px] text-[#000000] max-w-full">
            But even the most advanced enterprises are asking the same question:
          </p>

          <div className="flex justify-center w-full">
            <h3 className="mb-8 font-bold text-black text-[25px] leading-[34px] md:text-[37px] md:leading-[44px] md:w-[703px] w-[347px] text-center">
              Which capabilities will matter most, and how do we build them at scale?
            </h3>
          </div>

          <p className="md:w-[1241px] w-[385px] text-[15px] leading-[24px] md:text-[27px] md:leading-[35px] font-satoshi text-[#000000]">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise
            workforce leaders for a candid, senior-level discussion on what’s
            coming next.
          </p>
        </div>
      </div>
    </section>
  );
}
