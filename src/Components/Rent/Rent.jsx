import React, { useState } from "react";
import "./Rent.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import HotelCard from "../Homepage/Hotelcard/HotelCard";

function Rent() {
  const color = useSelector((state) => state.colors.userdata);
  const [checkrent, setrent] = useState([1, 2, 4]);
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      exit={{ opacity: "0" }}
      className={`rent w-3/4 h-full pb-20 fixed  overflow-scroll right-0 flex items-center justify-center  flex-row flex-wrap  `}
    >
      {checkrent != null ? (
        <h1
          className={`w-5/6 flex justify-start items-center pl-10 text-3xl font-bold text-white   h-20 ${color.sidemainTailwind}`}
        >
          Rented PG
        </h1>
      ) : (
        ""
      )}
      {checkrent == null ? (
        <h2>You haven't rented a PG</h2>
      ) : (
        checkrent.map((item, index) => {
          return (
            <>
              <motion.div
                key={index}
                style={{
                    backgroundImage:url
                }}
                className={`rentli w-1/4 h-52 border rounded-md border-spacing-1 m-4`}
              >
                <div className={`hotelcard`}>
                  <HotelCard />
                </div>
                <div className={`hoverdiv ${color.sidemainTailwind} `}>
                  <i
                    className="fa-sharp fa-solid fa-house fa-2xl"
                    style={{
                      color: `${
                        color.MaincolorTailwind == "bg-green-700"
                          ? "green"
                          : "black"
                      }`,
                    }}
                  ></i>
                  Date:- 26/11/2002
                </div>
              </motion.div>
            </>
          );
        })
      )}
    </motion.div>
  );
}

export default Rent;
