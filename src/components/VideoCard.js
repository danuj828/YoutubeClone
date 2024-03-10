import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 mx-4 w-80 cursor-pointer h-auto">
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="rounded-lg"
      ></img>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>• {channelTitle}</li>
        <li>• {(statistics.viewCount / 100000).toFixed(2)}M views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
