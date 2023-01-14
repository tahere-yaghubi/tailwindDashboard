import React from "react";
import { AcademicCapIcon } from "../../../assets/icons";

function Card() {
  return (
    <div className="lg:w-1/4 sm:w-1/2  hover:cursor-pointer">
      <div className="flex flex-row justify-center items-center px-10 py-5 m-2 rounded-lg shadow-lg bg-white max-w-sm">
        <AcademicCapIcon customClass="mb-3" />
        <div className="flex-col p-3 justify-center align-center">
          <h1 className="text-gray-400 text-bold text-2xl">test</h1>
          <span className="text-black">$435</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
