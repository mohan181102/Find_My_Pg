import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BookPage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function BookPage({ image, hotelname, price, rating, location }) {
  const color = useSelector((state) => state.colors.userdata);
  const array = [
    { name: "Hotelname", data: "hotelname" },
    { name: "Price", data: "price" },
    { name: "Rating", data: "rating" },
    { name: "Location", data: "location" },
  ];
  const [comment, setcomment] = useState(null);
  const imagearray = [1, 2, 3, 3];
  const navigate = useNavigate();
  const arrayforcommment = [
    {
      username: "maxwell",
      comment:
        "My experience was wonderfool in here and i make wonderfool memories",
    },
  ];

  if (comment == null) {
    setcomment(arrayforcommment);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-3/4 h-full pb-40 fixed  overflow-scroll right-0 flex flex-wrap items-center justify-center bg-white flex-row `}
    >
      <img
        className={`imgforbook w-full h-3/4 mb-3`}
        src={`https://images.unsplash.com/photo-1682688759157-57988e10ffa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU4MDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzM2NTg3N3w&ixlib=rb-4.0.3&q=80&w=400`}
      />
      <div
        className={`w-3/4 h-auto my-3 rounded-md p-2 pl-2 overflow-scroll flex items-center  justify-start flex-wrap ${color.sidemainTailwind}`}
      >
        <h2
          className={`w-3/4 font-bold text-lg h-10 overflow-hidden  ${color.sidemainTailwind} text-white  pl-9 flex justify-start items-center `}
        >
          Images
        </h2>
        <div className={`w-full h-1/4 flex overflow-scroll pl-2 overflow `}>
          {imagearray.map((item, index) => {
            return (
              <>
                <div
                  alt="not found"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                      "https://images.unsplash.com/photo-1682688759157-57988e10ffa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU4MDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzM2NTg3N3w&ixlib=rb-4.0.3&q=80&w=400"
                    )`,
                  }}
                  key={index * 3}
                  className={`imghotel  w-1/4 mx-2 h-1/4  rounded-md bg-white `}
                >
                  <div
                    className={`imgforpg  flex items-center text-white justify-center bg-black`}
                  >
                    {"Bedroom"}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <ul
        className={`detailsul w-3/4 h-auto flex items-center  justify-center flex-wrap flex-row border border-spacing-1 border-gray-600`}
      >
        <h2
          className={`w-full font-bold text-lg h-14 ${color.sidemainTailwind} text-white  pl-9 flex justify-start items-center `}
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

      <div
        className={`w-3/4 h-auto flex items-center  justify-center flex-wrap flex-row overflow-scroll border border-spacing-1 border-gray-600`}
      >
        <h2
          className={`w-full font-bold text-lg h-14 ${color.sidemainTailwind} text-white  pl-9 flex justify-start items-center `}
        >
          Comments
        </h2>
        {comment != null
          ? comment.map((item, index) => {
              return (
                <li
                  key={index * 2}
                  className={`flex items-between justify-center flex-wrap bg-slate-200  w-5/6 h-auto  `}
                >
                  <h3
                    className={` w-full h-1/4 bg-white text-black flex items-center justify-start `}
                  >
                    <img alt="?" />
                    <p>{item.username}</p>
                  </h3>
                  <p>{item.comment}</p>
                </li>
              );
            })
          : ""}
      </div>
      <NavLink
        onClick={() => navigate("/payment")}
        className={`w-3/5 h-10 fixed bottom-0 flex items-center justify-center ${color.sidemainTailwind} text-white`}
      >
        Process For Booking
      </NavLink>
    </motion.div>
  );
}

export default BookPage;
