import React from "react";
import Buttons from "./Buttons";

const list = ["All", "Music", "Mixes", "Live", "Gaming", "Football"];

const ButtonsList = () => {
  return (
    <div className="flex">
      {list.map((text, index) => (
        <Buttons name={text} key={index}></Buttons>
      ))}
    </div>
  );
};

export default ButtonsList;
