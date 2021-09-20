import React from 'react';
//import Progress from './Progress';
//import { FaGithub, FaVoteYea } from "react-icons/fa";

const VoteCard = ({ number, title, body }) => {
    return (
        <div draggable={false} src={number} className="grid border-2 border-blue-300 justify-items-center h-50 w-screen p-4 rounded-xl bg-gradient-to-tr from-indigo-200 to-blue-100">
            <h1 className="p-1 font-body font-bold text-lg cursor-default text-indigo-900">{title}</h1>
            <p className="truncate border-2 border-blue-400 rounded-lg w-11/12 p-3 m-5 cursor-default text-indigo-900">{body}</p>
            <div className="flex space-x-6">
              <button className="text-base bg-blue-600 border-2 border-blue-600 text-white rounded-full w-24 h-12 py-2 px-4 hover:shadow-2xl hover:ring-1 hover:ring-blue-600 transition duration-300 font-body">Vote</button>
              <button className="text-sm text-blue-600 border-2 border-blue-600 rounded-full bg-transparent w-24 h-12 py-2 px-4 hover:bg-blue-600 hover:text-white transition duration-100 font-body">Discuss</button>
            </div>
        </div>
  );
  
};

export default VoteCard


/*
            <div className="flex justify-center p-4">
              <Progress className="container lg:w-10" progress={progress} />
            </div>
            */