import React from "react";

const ResumeCard = () => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      <h6 className="w-24 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
        2021-Present
      </h6>
      <h2 className="text-lg font-titleFont text-gray-200 font-medium">
        SMK Taruna Bhakti
      </h2>
      <p className="text-sm text-[#999] -mt-2">Depok</p>
      <p className="text-base text-[#999] font-medium pr-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default ResumeCard;
