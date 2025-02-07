import React from "react";
import { Timeline } from "../Components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
            <h1 className="text-neutral-100 dark:text-neutral-200 font-bold text-sans py-1 tracking-wide text-2xl">B.Tech</h1>
          <p className="text-neutral-500 dark:text-neutral-200 md:text-md md:font-semi-bold py-2">
            Currently pursuing my B.Tech at <span className="bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text md:font-extrabold">Godavari Institute of Engineering
            and Technology Institutions</span>, Rajahmundry
            <div className="font-bold pt-3">CGPA : <span className="text-xl bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text">7.85</span></div>
          </p>
        </div>
      ),
    },

    {
      title: "2022",
      content: (
        <div>
        <h1 className="text-neutral-100 dark:text-neutral-200 font-bold text-sans py-1 tracking-wide text-2xl">InterMediate</h1>
      <p className="text-neutral-500 dark:text-neutral-200 md:text-md md:font-semi-bold py-2">
      Completed my secondary education from <span className="bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text font-extrabold"> Vidya vikas Junior
      College
       </span>, Mandapeta
        <div className="font-bold pt-3">Marks : <span className="text-xl bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text">866</span></div>
      </p>
    </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
        <h1 className="text-neutral-100 dark:text-neutral-200 font-bold text-sans py-1 tracking-wide text-2xl">School</h1>
      <p className="text-neutral-500 dark:text-neutral-200 md:text-md md:font-semi-bold py-2">
      Completed my Schooling from <span className="bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text font-extrabold"> Z.P.P.High School
       </span>, Angara
        <div className="font-bold pt-3">Marks : <span className="text-xl bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text">540</span></div>
      </p>
    </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
