import React from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { RiNodeTree } from "react-icons/ri";
import { CiViewBoard } from "react-icons/ci";
import { RiShieldCheckLine } from "react-icons/ri";
import { AiOutlineNodeExpand } from "react-icons/ai";
import { MdOutlineRocketLaunch } from "react-icons/md";

const exploreData = [
  { title: "Skills Decay", desc: "every 2-3 years faster for technical skills", icon: <RxCountdownTimer size={43} /> },
  { title: "Manager Role Shift", desc: "orchestrating people + AI agents", icon: <RiNodeTree size={43} /> },
  { title: "Leaders + AI Co-Pilots", desc: "requires sensemaking and systems thinking", icon: <CiViewBoard size={43} /> },
  { title: "Frontline Capability", desc: "now depends on digital fluency", icon: <RiShieldCheckLine size={43} /> },
  { title: "Core Human Capabilities", desc: "analytical reasoning and scenario planning", icon: <AiOutlineNodeExpand size={43} /> },
  { title: "Winning Organizations", desc: "predict skills ahead of demand", icon: <MdOutlineRocketLaunch size={43} /> },
];

export default function Explore() {
  return (
    <section className="w-full bg-[#CDDCFB] py-12 md:py-16 px-5 sm:px-8 md:px-20">
      <div className="mx-auto md:w-[1240px] w-[388px]  text-left mb-12">
        <p className="text-[#F5AB40] font-bold text-[25px] md:text-[43px] font-satoshi mb-6">
          What We’ll Explore
        </p>
        <p className="text-[15px] md:text-[27px] font-satoshi text-[#000000] mb-12">
          The critical shifts every enterprise must plan for:
        </p>

        <div className="flex flex-wrap justify-center gap-6 ">
          {exploreData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5E5] rounded-lg p-4 flex flex-col gap-4 shadow-sm md:w-[390px] w-[388px] md:h-[203px] h-[151]"
            >
              <div className="flex items-center gap-3">
                <div className="text-[28px] text-[#1D4DF4]">{item.icon}</div>
                <h4 className="font-bold font-satoshi text-black text-[20px] md:text-[25px]">{item.title}</h4>
              </div>
              <p className="text-[#000000] text-[15px] leading-[30px] font-satoshi md:text-[27px] md:w-[300px] w-[200px] flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
