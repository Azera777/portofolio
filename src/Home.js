import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGoogle, SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
      <div className="w-16 h-40 bg-transparent flex flex-col mt-[120px] gap-4">
        {/* other icons */}
        <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center">
          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer group"
          >
            <FaUser />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              About
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(true) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer group"
            style={{ marginTop: "1.5rem" }}
          >
            <IoIosPaper />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Resume
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setBlog(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer group"
            style={{ marginTop: "1.5rem" }}
          >
            <MdWork />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(true)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer group"
            style={{ marginTop: "1.5rem" }}
          >
            <FaEnvelope />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Contact
            </span>
          </span>
          <span
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer group"
            style={{ marginTop: "1.5rem" }}
          >
            <BsTelephonePlusFill />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Call
            </span>
          </span>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        {/*left part start*/}
        <Left />
        {/*right part start*/}
        <div className="w-8/12 h-[95%] bg-bodyColor">
          <div className="w-full h-[96%] overflow-y-scroll scrollbar-hide">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
