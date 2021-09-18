import React from 'react';
import { FaSquare } from "react-icons/fa";

const Progress = ({ progress }) => {
  const totalProgress = [];

  for(let i = 0; i < 20; i++) {
    if(i < progress) {
      totalProgress.push(
        <li key={i}>
          <FaSquare className="text-green-400 text-xs"/>
        </li>
      );
    } else {
      totalProgress.push(
        <li key={i}>
          <FaSquare className="text-transparent text-xs"/>
        </li>
      );
    }
  }
  return (
    <div>
      <ul className="flex border-2 border-green-400 rounded">{totalProgress}</ul>
    </div>
  );
};

export default Progress;