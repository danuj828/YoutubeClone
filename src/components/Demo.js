import React, { useMemo, useState } from "react";
import { findNthPrime } from "../Utils/Helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const prime = useMemo(() => findNthPrime(text), [text]);
  console.log("render...");
  return (
    <div
      className={
        "m-4 p-2 border border-black w-96 h-96" +
        (darkTheme ? " bg-gray-900 text-white" : "")
      }
    >
      <div>
        <button
          className="border p-2 bg-fuchsia-400"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          Toggle
        </button>
      </div>
      <div className="text-center">
        <input
          value={text}
          type="number"
          onChange={(e) => setText(e.target.value)}
          className="border border-black p-2 m-4 text-black"
        ></input>
        <h1>ans - {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
