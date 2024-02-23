import React, { useState } from "react";
import "./HotelCard.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function HotelCard({ image, hotelname, price, rating, location }) {
  const [body, setbody] = useState(true);
  const color = useSelector((state) => state.colors.userdata);
  return (
    <motion.div
      initial={{ scale: "0" }}
      animate={{ scale: "1" }}
      exit={{ scale: "0" }}
      onMouseDown={() => setbody((prev) => !prev)}
      className={`body w-full h-full border rounded-md flex items-center justify-center flex-col`}
    >
      <img
        src={`https://images.unsplash.com/photo-1682688759157-57988e10ffa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU4MDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzM2NTg3N3w&ixlib=rb-4.0.3&q=80&w=400`}
        className={`img w-full h-3/4 border border-spacing-1 rounded-t-md `}
      />
      <div
        className={`data w-full h-1/4 ${color.sidemainTailwind} flex rounded-b-md items-center justify-center flex-row flex-wrap`}
      >
        <h2
          className={` h-2/4 w-full text-lg text-white flex justify-between items-center flex-row pl-2`}
        >
          Raju palace
          <p
            className={`span w-auto h-auto text-md flex justify-center mr-2 px-2 items-center `}
          >
            <span className={`font-bold w-full h-auto ${color.TextTailwind}`}>
              4.6 <i className="fa-solid fa-star fa-sm "></i>
            </span>
          </p>
        </h2>
        <p
          className={` w-1/4 h-2/4 text-sm text-white flex justify-start items-center flex-row pl-2 `}
        >
          6000
        </p>
        <p
          className={`w-3/4 h-2/4 text-ellipsis text-sm text-right overflow-scroll text-white flex justify-end pr-1 items-center flex-row`}
        >
          <i
            class="fa fa-map-marker"
            aria-hidden="true"
            style={{ margin: "4px" }}
          ></i>{" "}
          Durg CG
        </p>
      </div>
    </motion.div>
  );
}

export default HotelCard;
