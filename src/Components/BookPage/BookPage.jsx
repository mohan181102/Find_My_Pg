import React from "react";
import { NavLink } from "react-router-dom";
import "./BookPage.css";
import { useNavigate } from "react-router-dom";

function BookPage({ image, hotelname, price, rating, location }) {
  const array = [
    { name: "Hotelname", data: "hotelname" },
    { name: "Price", data: "price" },
    { name: "Rating", data: "rating" },
    { name: "Location", data: "location" },
  ];
  const imagearray = [1, 2, 3, 4, 5, 6, 4, 4, 4, 4, 4];
  const navigate = useNavigate();
  return (
    <div
      className={`w-3/4 h-full pb-20 fixed  overflow-scroll right-0 flex flex-wrap items-center justify-center bg-white flex-row `}
    >
      <img
        className={`imgforbook w-full h-3/4`}
        src={`https://images.unsplash.com/photo-1682688759157-57988e10ffa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU4MDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzM2NTg3N3w&ixlib=rb-4.0.3&q=80&w=400`}
      />

      <div
        className={`w-3/4 h-36 my-3 p-2  flex-row flex items-center overflow-y-hidden overflow-x-scroll  bg-green-500`}
      >
        {imagearray.map((item, index) => {
          return (
            <li
              key={index}
              className={`w-44 mx-2 inline-block h-3/4 overflow-scroll  rounded-md bg-white `}
            >
              {item}
            </li>
          );
        })}
      </div>

      <ul
        className={`detailsul w-3/4 h-auto flex items-center  justify-center flex-wrap flex-row border border-spacing-1 border-gray-600`}
      >
        <h2
          className={`w-full font-bold text-lg h-14 bg-green-500 text-white  pl-9 flex justify-start items-center `}
        >
          Details
        </h2>

        {array.map((item, index) => {
          return (
            <li className={`flex items-between justify-left  w-full h-14  `}>
              <p
                className={`w-10 h-full flex font-medium items-center justify-center`}
              >
                {index + 1}
              </p>
              <p
                className={`text-md w-1/4 h-full text-left flex items-center font-medium justify-start`}
              >
                {item.name}
              </p>
              <span className={` w-2 h-full flex items-center justify-center `}>
                <i class="fa-solid fa-caret-right"></i>
              </span>
              <p
                className={`h-full w-2/4 flex items-center  justify-start pl-4`}
              >
                {item.data}
              </p>
            </li>
          );
        })}
      </ul>
      <NavLink
        onClick={() => navigate("/payment")}
        className={`w-3/5 h-10 fixed bottom-0 flex items-center justify-center bg-green-500 text-white`}
      >
        Process For Booking
      </NavLink>
    </div>
  );
}

export default BookPage;