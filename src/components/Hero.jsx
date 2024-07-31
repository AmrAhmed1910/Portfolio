import React from "react";
import { HERO_CONTENT } from "./../constants/index";
import Profile from "../assets/Profile.jpg";
import { motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-32 lg:pt-36 pt-24 lg:mb-35 ">
      <div className="flex flex-wrap lg:flex-nowrap mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:ml-20">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className=" text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Amr Aboelsoud
            </motion.h1>
            <motion.span
              variants={Container(0.5)}
              initial="hidden"
              animate="visible"
              className="selection:text-white bg-gradient-to-r from-pink-500 via-slate-600
                    to-purple-700 bg-clip-text text-2xl tracking-normal text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="lg:mx-10 max-w-xl py-6 font-light tracking-normal text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-2/3 lg:w-1/3 flex mx-auto justify-center lg:justify-middle">
          <motion.div
            variants={Container(1.5)}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="overflow-hidden relative "
          >
            <img
              src={Profile}
              alt="Amr Ahmed"
              className="max-w-auto w-xs relative z-10 rounded-xl lg:max-w-xs"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
