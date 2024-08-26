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
const skills = [
  { icon: <FaHtml5 className="text-4xl text-red-500" />, delay: 2.5 },
  { icon: <FaCss3Alt className="text-4xl text-blue-400" />, delay: 3 },
  { icon: <SiJavascript className="text-4xl text-yellow-400" />, delay: 2.2 },
  { icon: <RiReactjsLine className="text-4xl text-cyan-400" />, delay: 3.6 },
  { icon: <SiTypescript className="text-4xl text-blue-500" />, delay: 1.5 },
  { icon: <FaNodeJs className="text-4xl text-green-500" />, delay: 4 },
  { icon: <SiExpress className="text-4xl" />, delay: 3.3 },
  { icon: <SiMongodb className="text-4xl text-green-500" />, delay: 1.8 },
  { icon: <SiMysql className="text-4xl text-cyan-800" />, delay: 2 },
  { icon: <SiBootstrap className="text-4xl text-purple-600" />, delay: 1.7 },
  { icon: <SiTailwindcss className="text-4xl text-cyan-400" />, delay: 3.8 },
  { icon: <SiGithub className="text-4xl" />, delay: 1.3 },
];

const Skills = () => {
  return (
    <div id="skills" className=" border-b border-neutral-900 pb-24">
      <h1 className="my-8 text-center text-4xl font-semibold text-white">Skills</h1>
        <div className=" flex flex-wrap  items-center justify-center gap-4 lg:w-1/2 mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={iconMotion(skill.delay)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-3 border-neutral-900 p-4"
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default Skills;