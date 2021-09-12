import React from 'react';
import {
    MinusIcon,
    HeartIcon,
  } from "@heroicons/react/solid";

const Progress = ({ progress }) => {
  const totalProgress = [];

  for(let i = 0; i < 5; i++) {
    if(i < progress) {
      totalProgress.push(
        <li key={i}>
          <HeartIcon className="w-4 h-4"/>
        </li>
      );
    } else {
      totalProgress.push(
        <li key={i}>
          <MinusIcon className="w-4 h-4"/>
        </li>
      )
    }
  }
  return (
    <div>
      <ul className="inline-flex">{totalProgress}</ul>
    </div>
  );
};

export default Progress;