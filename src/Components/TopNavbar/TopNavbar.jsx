import React from "react";
import "./TopNavbar.css";

function TopNavbar() {
  return (
    <nav
      className={`w-full h-16 bg-green-700 flex items-center justify-center `}
    >
      <span
        className={`h-14 flex items-center justify-center w-auto px-2 ml-2 text-green-700  rounded-md bg-white absolute left-0`}
      >
        <i className="fa-sharp fa-solid fa-house fa-2xl"></i>
      </span>
      <h1
        className={`text-white w-auto h-full text-2xl font-extrabold flex items-center justify-center cursor-default`}
      >
        MY PG FINDER
      </h1>
    </nav>
  );
}

export default TopNavbar;
