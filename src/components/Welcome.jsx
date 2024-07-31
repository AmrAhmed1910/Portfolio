import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Welcome = ({ onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({ opacity: 0, transition: { duration: 1 } }).then(() => {
        onComplete();
      });
    }, 30000);

    return () => clearTimeout(timer);
  }, [controls, onComplete]);

  return (
    <motion.div
      className=" bg-scroll flex min-h-screen  justify-center absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 p-10"
      initial={{ opacity: 1 }}
      animate={controls}
    >
      <div className="w-max">
        <h1 className="animate-typing whitespace-nowrap lg:h-14 sm:text-3xl md:text-4xl lg:text-5xl overflow-hidden border-r-4 border-r-white pr-2 text-white font-bold">
          Hi, Welcome to my Portfolio.
        </h1>
      </div>
    </motion.div>
  );
};

export default Welcome;
