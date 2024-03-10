import React from "react";
import Buttons from "./Buttons";

const list = [
  "Explore",
  "All",
  "Music",
  "Mixes",
  "Live",
  "Gaming",
  "Football",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Laptops",
];

const ButtonsList = () => {

  return (
    <div className="flex mx-4">
      {list.map((text, index) => (
        <Buttons name={text} key={index}></Buttons>
      ))}
    </div>
  );
};

export default ButtonsList;
