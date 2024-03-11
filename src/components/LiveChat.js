import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/ChatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomMessage, generateRandomNames } from "../Utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMsg, setLiveMsg] = useState("");

  const chatMsg = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(time);
  }, []);
  return (
    <>
      <div className="h-[500px] w-[500px] border border-black mx-4 rounded-md overflow-y-scroll flex  flex-col-reverse">
        {chatMsg.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>
      <form
        className="w-[94%] p-2 ml-[1rem] border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anuj Dubey",
              message: liveMsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          className="w-[75%] border border-gray-700 rounded-sm px-2"
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="border border-gray p-2 mx-4 rounded-md bg-neutral-400 text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
