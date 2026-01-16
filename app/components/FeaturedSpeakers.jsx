import React from "react";

const speakers = [
  {
    name: "Rob Lauber",
    desc: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
    image: "/Mask group.png", 
  },
  {
    name: "Krishna Kumar",
    desc: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
    image: "/Mask group (1).png", 
  },
  {
    name: "Sudipto Mitra",
    desc: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
    image: "/RobLauber 1@4x.png", 
  },
];

export default function FeaturedSpeakers() {
  return (
    <section className="bg-blue-700 w-full flex justify-center py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-20 flex flex-col gap-8 items-center md:items-start">
        <h2 className="text-[#F5AB40] font-satoshi font-bold text-[28px] md:text-[43px] text-center md:text-left">
          Featured Speakers
        </h2>

        <div className="flex flex-col gap-6 w-full">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start text-center md:text-left"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-[192px] h-[183px] md:w-[340px] md:h-[335px] object-cover rounded"
              />
              <div className="flex flex-col text-white">
                <h3 className="font-bold text-[20px] font-satoshi md:text-[25px] text-[#00FFFF]">{speaker.name}</h3>
                <p className="text-[15px] leading-[30px] font-satoshi md:text-[27px] md:leading-[37px] mt-2">{speaker.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-500 rounded-lg px-5 p-5 md:px-10 mt-4 md:mt-8 w-[389px] h-[195px] md:w-[1240px] md:h-[224px] text-left md:text-left">
          <h3 className="font-bold font-satoshi text-[#00FFFF] text-[20px] md:text-[25px] mb-2">
            Additional Expert Perspectives
          </h3>
          <p className="text-white font-satoshi text-[15px] leading-[23px] md:text-[27px] md:leading-[37px]">
            Invited experts from leading consulting and enterprise learning organizations will
            contribute short perspectives, offering insight into how large organizations are
            evolving skills and leadership models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
