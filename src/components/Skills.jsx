import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs,FaHtml5,FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGithub
} from "react-icons/si";
const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-8 text-center text-4xl font-semibold ">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-4xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-4xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-4xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-4xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-4xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-4xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-4xl text-cyan-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBootstrap className="text-4xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-4xl text-cyan-400" />
        </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGithub className="text-4xl " />
          </div>
      </div>
    </div>
  );
};

export default Skills;
