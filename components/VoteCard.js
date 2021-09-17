import React from 'react';
import Progress from './Progress';

const VoteCard = ({ id, title, description, progress }) => {
    return (
        <div draggable={false} src={id} className="grid justify-items-center h-50 w-screen p-4 border-4 bg-gradient-to-r from-blue-100 to-indigo-100">
            <div className="flex justify-center p-4">
              <Progress className="container lg:w-10" progress={progress} />
            </div>
            <h1 className="p-3 font-bold">{title}</h1>
            <p className="p-3">{description}</p>
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