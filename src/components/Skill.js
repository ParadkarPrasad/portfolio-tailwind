import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
function Skill() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="text">
      <p className="text-2xl pt-4 text-black text-center sm:text-4xl font-bold">
        Tech I use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl">
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              JavaScript
            </p>
          </SiJavascript>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl">
          <FaReact color="#2196f3" className="mx-auto text-4xl">
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              React
            </p>
          </FaReact>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl">
          <DiMongodb color="#008000" className="mx-auto text-4xl">
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              Mongodb
            </p>
          </DiMongodb>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl">
          <FaNodeJs color="#008000" className="mx-auto text-4xl">
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              NodeJS
            </p>
          </FaNodeJs>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl">
          <SiExpress color="#ffdf00" className="mx-auto text-4xl">
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
              Express
            </p>
          </SiExpress>
        </div>
      </div>
    </div>
  );
}

export default Skill;
