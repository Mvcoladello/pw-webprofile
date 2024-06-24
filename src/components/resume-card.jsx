import React from 'react';
import foto from "../assets/foto.jpg";



export function ResumeCard(){
  return (
    <div className="max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center px-6 py-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Hi, I am Marcos,</h1>
          <h2 className="text-2xl font-semibold mb-4">Software developer</h2>
          <p className="text-gray-600 mb-6">
            Namorado da Alana, tenho um sitzu chamado apolo que so vejo nas ferias
          </p>
          <a
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            href='https://docs.google.com/document/d/e/2PACX-1vQ2snVuLzcWQaHXeFMqjxWDvDlImwWD2LX5g6FLpsUMUYUxojLv6KVPsnN2qdBd6-23F3WT1fxyNG8Z/pub'
            download="Marcos_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
        <div className="ml-4">
          <img
            src={foto}
            alt="Profile Picture"
            className="w-48 h-48 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}