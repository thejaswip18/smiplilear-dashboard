import React from "react";
import { TbCalendarDue } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

export default function Header() {
  return (
    <section
      className="relative w-full bg-cover bg-center h-[572px] md:h-[693px]"
      style={{ backgroundImage: "url('/shutterstock_2522029707 1.png')" }}
    >

      <div className="absolute top-6 left-5 sm:left-8 md:left-40 z-20">
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

          <span className=" flex flex-col items-center gap-[4px] mt-7">
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
      </div>

      <div className="relative z-10 flex h-full items-center px-5 sm:px-8 md:px-40">
        <div className="max-w-[640px] w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            <span
              style={{ WebkitTextStroke: "1px #000000" }}
              className="inline-flex h-[35px] w-[110px] md:w-[174px] md:h-[56px] items-center justify-center rounded-md bg-[#00FFFF] px-4 font-satoshi text-sm md:text-[20px] font-semibold text-[#25286A]"
            >
              Invite-Only
            </span>

            <p className="font-satoshi text-sm sm:text-base md:text-[18px] font-medium text-[#00FFFF]">
              An Executive Roundtable · Lunch
            </p>
          </div>

          <div className="mb-6 md:w-[771px] w-[302px] md:h-[186px] h-[200px]">
            <h1 className="font-satoshi text-[30px] leading-[40px] md:text-[52px] md:leading-[60px] font-bold text-[#F5AB40]">
              The Skills That Matter Next:
            </h1>

            <h2 className="mt-2 font-satoshi text-[30px] leading-[36px] md:text-[52px] md:leading-[60px] text-[#F5AB40]">
              Preparing Your Workforce & Leaders for the AI Era
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-satoshi text-white">
            <div className="flex items-center gap-3">
              <TbCalendarDue className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
              <span className="text-[14px] md:text-[18px] font-semibold leading-none">
                February 20, 2026
              </span>
            </div>

            <div className="flex items-center gap-3">
              <GoLocation className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
              <span className="text-[14px] md:text-[18px] font-semibold leading-none">
                Chamberlain’s Steak & Fish House, Dallas
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
