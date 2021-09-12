import React from 'react';
import Progress from './Progress';

const VoteCard = ({ id, title, description, progress }) => {
    return (
        <div draggable={false} src={id} className="box-content h-50 w-50 p-4 border-4 bg-gray-300">
            <h1 className="font-bold bg-yellow-200">{title}</h1>
            <p className="bg-red-300">{description}</p>
            <div className="bg-blue-500 flex-grid">
                <Progress progress={progress} />
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