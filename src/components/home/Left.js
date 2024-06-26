import React, { useReducer } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { MEOW1 } from '../../assets/index';
import CV from "../../../src/assets/CV_TEST.pdf";

const Left = () => {
    const [text] = useTypewriter({
        words: ["Web Developer", "Full Stack Developer", "UI/UX Designer"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });
    return (
        <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10'>
            <div className='w-full h-3/5'>
                <img className='w-full h-full object-cover rounded-2xl ' src={MEOW1} alt='MEOW1' loading='priority' />
            </div>
            <div className='w-full h-2/5'>
                {/* intro */}
                <div className='flex flex-col items-center gap-2 py-10'>
                    <h1 className='text-textColor text-4xl font-semibold'>Developer</h1>
                    <p1 className='text-base text-designColor tracking-wide'>{text}<Cursor cursorBlinking="false" cursorStyle="|"/></p1>
                    <div className='flex justify-center gap-2 mt-2'>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
                            <FaGithub />
                        </span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
                            <FiInstagram />
                        </span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
                            <FiMail />
                        </span>
                    </div>
                </div>
                {/* button */}
                <div className='flex h-14 mt-[-2rem]'>
                    <a className='w-1/2 h-full flex justify-center items-center border-r border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300s' href={CV} target='_blank' rel='noreferrer'>
                        <button className='flex justify-center items-center gap-2 uppercase'>
                            Download CV <BsCloudLightningFill />
                        </button>
                    </a>
                    <button className='w-1/2 h-full flex justify-center items-center border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300s'>
                        Contact Me! <FiSend />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Left;
