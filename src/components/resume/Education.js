import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-2 px-5 mt-3">
      <div className="col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4"></div>
    </div>
  );
};

export default Education;
