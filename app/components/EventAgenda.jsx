import React from "react";

const agendaData = [
    {
        title: "Welcome & Opening",
        speaker: "Sudipto Mitra, CRO Simplilearn",
        desc: "Why capability-building is now a board-level issue and what’s changing in the workforce landscape.",
    },
    {
        title: "What Enterprise Leaders Are Seeing on the Ground",
        speaker: "Rob Lauber, Former CLO McDonald’s",
        desc: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
    },
    {
        title: "Lunch & Executive Conversation",
        speaker: "Industry Experts Invited",
        desc: "What large enterprise talent ecosystems are learning about capability-building at scale.",
    },
];

export default function EventAgenda() {
    return (
        <section className="w-full bg-[#00FFFF] px-5 sm:px-8 md:px-20 py-12 md:py-16">
            <div className="mx-auto md:w-[1240px] w-[430px] md:h-[616px] h-[904px]  flex flex-col">

                <h2 className="text-[#1D4DF4] font-bold text-[20px] md:text-[40px] mb-10 mt-6">
                    Event Agenda
                </h2>

                <div className="flex flex-col md:flex-row gap-6 flex-1">
                    {agendaData.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4 w-[387px] h-[256px] md:w-[390px] md:h-[376px]"
                        >
                            <div className="md:w-[305px] md:h-[95px] ">
                                {idx === 1 && (
                                    <span className="text-[#1D4DF4] font-bold text-[18px] md:text-[22px] md:leading-[30px] font-semibold">
                                        Keynote:
                                    </span>
                                )}
                                <h3 className="text-[#1D4DF4] font-bold text-[18px] md:text-[22px] md:leading-[30px] font-semibold">
                                    {item.title}
                                </h3>
                            </div>


                            <p className="text-black font-semibold text-[15px] md:text-[18px] md:mb-6 ">
                                {item.speaker}
                            </p>

                            <p className="text-black text-[14px] md:text-[20px] leading-[30px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
