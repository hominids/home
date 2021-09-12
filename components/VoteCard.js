import React from 'react'
import Progress from './Progress'

const VoteCard = ({ id, title, description, progress }) => {
    return (
        <div draggable={false} src={id} className="box-content h-50 w-50 p-4 border-4 bg-gray-300">
            <h1 className="font-bold">{title}</h1>
            <p>{description}</p>
            <div>
                <Progress  />
            </div>
        </div>
  );
  
};

export default VoteCard


/* 
import React from 'react';
import {
    HeartIcon,
  } from "@heroicons/react/solid";

const Progress = ({ progress }) => {
  const totalProgress = [];

  for(let i = 0; i < 5; i++) {
    if(i < progress) {
      totalProgress.push(
        <li className="w-4 h-4" key={i}>
          <HeartIcon />
        </li>
      );
    } else {
      totalProgress.push(
        <li className="w-4 h-4" key={i}>
          <HeartIcon />
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
*/