import React, { useState } from "react";
import HotelCard from "./Hotelcard/HotelCard";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]);
  const navigate = useNavigate();
  return (
    <div
      className={`w-3/4 h-full pb-20 fixed  overflow-scroll right-0 flex items-center justify-center bg-white flex-col `}
    >
      <ul
        className={`w-full h-full overflow-scroll appearance-none scroll-m-0 flex items-center justify-center flex-row flex-wrap`}
      >
        <h1
          className={`w-5/6 h-16 bg-green-500 text-white text-left text-3xl font-bold m-3 rounded-sm flex items-center justify-start pl-4 `}
        >
          LIST OF PG
        </h1>
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className={` w-1/4 h-52 border rounded-md border-spacing-1 m-4  `}
              onClick={() => navigate("/bookpage")}
            >
              <HotelCard />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Homepage;
