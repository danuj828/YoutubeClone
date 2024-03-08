import React from "react";
import TimestampConverter from "./TimeStampConverter";

const Comments = ({ info }) => {

  const { snippet } = info;
  const { authorProfileImageUrl, authorDisplayName, publishedAt } = snippet;

  return (
    <div className="flex p-2 m-2">
      <span>
        <img
          alt="icon"
          src={authorProfileImageUrl}
          className="rounded-3xl"
        ></img>
      </span>
      <div className="p-2 ">
        <span className="flex">
          <h1 className="font-bold ">{authorDisplayName}</h1>
          <TimestampConverter timestamp={publishedAt} />
        </span>
        <h3 className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </div>
    </div>
  );
};

export default Comments;
