"use client";

import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { submitRSVP } from "./backend/submitRSVP"; 

export default function Curtain() {
  const insights = [
    "A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.",
    "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
    "Signals for where capability gaps may already be forming in your organization.",
    "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
    "Actionable insights you can take straight into your next exec meeting.",
  ];

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
    <section className="w-full bg-white px-5 sm:px-8 md:px-20 py-10 md:py-5">
      <div className="mx-auto max-w-[1240px] flex flex-col md:flex-row gap-10 md:gap-20 items-center">

        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/shutterstock_1967772526 1.png"
            alt="Chess strategy illustration"
            className="w-[293px] h-[299px] md:w-[570px] md:h-[611px]"
          />
        </div>

        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-[#F5AB40] font-bold text-[22px] md:text-[32px] leading-[30px] md:leading-[40px] mb-4">
            Go behind the curtain with real <br className="hidden md:block" />
            examples and high-scale insights
          </h2>

          <p className="text-black font-satoshi text-[15px] leading-[23px] md:text-[27px] md:leading-[37px] mb-4">
            You’ll walk away with:
          </p>

          <div className="space-y-4 text-[13px] md:text-[15px] text-black">
            {insights.map((text, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="bg-[#F5AB40] w-[3px] h-[40px] md:h-[59px] block"></span>
                <span className="md:text-[18px]">{text}</span>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-5 flex flex-col gap-4 md:flex-row md:items-start md:gap-3"
          >
            <div className="relative w-[398px] md:w-[606px] bg-[#E7E7E7]">
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
      </div>
    </section>
  );
}
