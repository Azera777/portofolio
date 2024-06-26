import React from "react";

const AboutMe = () => {
  return (
    <div className="flex pb-6">
      <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
        <div className="py-6">
          <h2 className="font-semibold mb-1 text-lg">Hello!</h2>
          <p className="text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className="aboutRightli">
            <span className="aboutRightliSpan">Age:</span>
            17
          </li>
          <li className="aboutRightli">
            <span className="aboutRightliSpan">Residence:</span>
            Indonesia
          </li>
          <li className="aboutRightli">
            <span className="aboutRightliSpan">Address:</span>
            Depok, Jawa Barat
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
