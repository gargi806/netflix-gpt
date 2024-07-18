import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-24 absolute text-white">
      <h1 className="text-6xl font-bold px-6">{title}</h1>
      <p className="p-6 text-base w-2/4 ">{overview}</p>
      <div className="p-4">
        <button className="text-black bg-white m-2 px-12 p-4 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="text-white bg-gray-500  m-2 px-12 p-4 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
