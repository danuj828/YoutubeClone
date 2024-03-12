import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg w-40 p-5 ">
      <ul>
        <li className="font-bold text-lg py-1">
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold text-lg py-2">Subscriptions</li>
        <li className="font-bold text-lg py-2">Library</li>
        <li className="font-bold text-lg py-2">History</li>
        <li className="font-bold text-lg py-2">Your Videos</li>
        <li className="font-bold text-lg py-2">Watch Later</li>
        <li className="font-bold text-lg py-2">Liked Videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
