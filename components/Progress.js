import React from 'react';
import {
    MenuIcon,
  } from "@heroicons/react/outline";

const Progress = ({ progress }) => {
  const totalProgress = [];

  for(let i = 0; i < 5; i++) {
    if(i < progress) {
      totalProgress.push(
        <li className="star" key={i}>
          <MenuIcon />
        </li>
      );
    } else {
      totalProgress.push(
        <li className="star-o" key={i}>
          <MenuIcon />
        </li>
      )
    }
  }
  return (
    <div className="progress">
      <ul>{totalProgress}</ul>
    </div>
  );
};

export default Progress;