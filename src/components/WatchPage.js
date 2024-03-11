import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS } from "../Utils/Api";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS);
    const json = await data.json();
    setComments(json.items);
  };

  return (
    <div>
      <div className="px-5 flex">
        <div>
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <h1 className="font-bold text-3xl m-2">18 Comments</h1>
      <div>
        <span className="flex">
          <img
            alt="user-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuUpS75fQX8Z2F57l-Vdilx71TAAzJ1qZdzlj25g4eQ&s"
            className="h-8 m-2"
          />
          <input placeholder="Add a comment" className="p-2 border"></input>
          <button className="border border-blue-200 bg-slate-500 text-white mx-2 rounded-lg">
            Comment
          </button>
        </span>
        {comments.map((comment) => (
          <Comments info={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
