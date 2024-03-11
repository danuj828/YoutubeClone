import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex border">
      <div>
        <img
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuUpS75fQX8Z2F57l-Vdilx71TAAzJ1qZdzlj25g4eQ&s"
          className="h-8 w-8 m-2"
        ></img>
      </div>
      <div className="py-2">
        <span className="font-bold text-xl">{name}</span>
        <span className="mx-2 font-bold">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
