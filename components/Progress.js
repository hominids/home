import React from 'react';
import {
    HeartIcon,
  } from "@heroicons/react/solid";

const Progress = ({ progress }) => {
  const totalProgress = [];

  for(let i = 0; i < 5; i++) {
    if(i < progress) {
      totalProgress.push(
        <li key={i}>
          <HeartIcon />
        </li>
      );
    } else {
      totalProgress.push(
        <li key={i}>
          <HeartIcon />
        </li>
      )
    }
  }
  return (
    <div className="inline-grid w-4 h-4">
      <ul>{totalProgress}</ul>
    </div>
  );
};

export default Progress;