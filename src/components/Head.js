import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Api";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          className="h-10 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            alt="youtube-logo"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            className="h-10 mx-2"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-2/4 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-300 p-2 rounded-r-full text-black bg-gray-200">
            Search
          </button>
        </div>
        <div className="absolute bg-gray-100  px-2 w-[34rem] shadow-lg rounded-lg">
          <ul>
            {showSuggestions &&
              suggestions.map((s) => (
                <li className="py-2 px-3 shadow-sm hover:bg-slate-200" key={s}>
                  {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuUpS75fQX8Z2F57l-Vdilx71TAAzJ1qZdzlj25g4eQ&s"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
