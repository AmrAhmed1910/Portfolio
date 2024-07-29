import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";
const iconMotion = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-8 text-center text-4xl font-semibold text-white">Skills</h1>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconMotion(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <FaHtml5 className="text-4xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconMotion(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <FaCss3Alt className="text-4xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconMotion(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiJavascript className="text-4xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconMotion(3.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconMotion(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiTypescript className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconMotion(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <FaNodeJs className="text-4xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconMotion(3.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiExpress className="text-4xl" />
        </motion.div>
        <motion.div
          variants={iconMotion(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiMongodb className="text-4xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconMotion(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiMysql className="text-4xl text-cyan-800" />
        </motion.div>
        <motion.div
          variants={iconMotion(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiBootstrap className="text-4xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconMotion(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiTailwindcss className="text-4xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconMotion(1.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-900 p-4"
        >
          <SiGithub className="text-4xl " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
