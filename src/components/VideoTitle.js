import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black pt-[25%] px-24 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="p-6 text-lg w-2/4 ">{overview}</p>
      <div className="p-4">
        <button className="text-white bg-red-600 m-2 px-12 p-4 text-xl rounded-lg ">
          ▶️ Play
        </button>
        <button className="text-white bg-gray-500  m-2 px-12 p-4 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
