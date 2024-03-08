import React from "react";

const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 cursor-pointer shadow-lg">
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="rounded-lg"
      ></img>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideocard = ({ info }) => {
  return (
    <div className="border border-black p-1 m-1">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
