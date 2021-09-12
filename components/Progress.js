import React from 'react';
import {
    HeartIcon as HeartSolid
  } from "@heroicons/react/solid";
  import {
    HeartIcon as HeartOuline
  } from "@heroicons/react/outline";

const Progress = ({ progress }) => {
  const totalProgress = [];

  for(let i = 0; i < 8; i++) {
    if(i < progress) {
      totalProgress.push(
        <li key={i}>
          <HeartSolid className="w-4 h-4"/>
        </li>
      );
    } else {
      totalProgress.push(
        <li key={i}>
          <HeartOuline className="w-4 h-4"/>
        </li>
      );
    }
  }
  return (
    <div>
      <ul className="inline-flex">{totalProgress}</ul>
    </div>
  );
};

export default Progress;