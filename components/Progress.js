import React from 'react';
import { FaSquare } from "react-icons/fa";

const Progress = ({ progress }) => {
  const totalProgress = [];

  for(let i = 0; i < 10; i++) {
    if(i < progress) {
      totalProgress.push(
        <li key={i}>
          <FaSquare className="text-green-400 text-xs md:text-base lg:text-lg"/>
        </li>
      );
    } else {
      totalProgress.push(
        <li key={i}>
          <FaSquare className="text-transparent text-xs md:text-base lg:text-lg"/>
        </li>
      );
    }
  }
  return (
    <div>
      <ul className="flex">{totalProgress}</ul>
    </div>
  );
};

export default Progress;