import React, { useEffect, useState } from "react";
import "./TopNavbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changecolor } from "../../Store/colors";

function TopNavbar() {
  const color = useSelector((state) => state.colors.userdata);
  console.log(color);
  const dispatch = useDispatch();
  const [togle, settogel] = useState(true);

  function changeTheme() {
    if (!togle) {
      dispatch(
        changecolor({
          Maincolo: "black",
          MaincolorTailwind: `bg-black`,
          sidemainTailwind: "bg-black",
          TextTailwind: "text-black",
          BorderTailwind: "border-green-700",
          HoverTailwind: "hover:bg-black hover:opacity-60",
        })
      );
      console.log(color);
    } else {
      dispatch(
        changecolor({
          Maincolor: "rgb(21, 128, 61)",
          MaincolorTailwind: "bg-green-700",
          sidemainTailwind: "bg-green-500",
          TextTailwind: "text-green-500",
          BorderTailwind: "border-black",
          HoverTailwind: "hover:bg-green-300",
        })
      );
    }
  }

  return (
    <nav
      className={`w-full h-16 ${color.MaincolorTailwind}   flex items-center  justify-center `}
    >
      <span
        className={`h-14 flex items-center justify-center w-auto px-2 ml-2 ${color.MaincolorTailwind}  rounded-md bg-white absolute left-0`}
      >
        <i
          className="fa-sharp fa-solid fa-house fa-2xl"
          style={{
            color: `${
              color.MaincolorTailwind == "bg-green-700" ? "green" : "black"
            }`,
          }}
        ></i>
      </span>
      <h1
        className={`text-white w-auto h-full text-2xl font-extrabold flex items-center justify-center cursor-default`}
      >
        MY PG FINDER
      </h1>

      <button
        onClick={() => {
          settogel((prev) => !prev), changeTheme();
        }}
        className={`${
          !togle ? " bg-white text-green-500" : "bg-white text-black"
        } fixed h-14 w-auto p-2 rounded-md right-2`}
      >
        {!togle ? (
          <i
            className="fa-solid fa-moon fa-2xl"
            style={{
              color: `${
                color.MaincolorTailwind == "bg-green-700" ? "green" : "black"
              }`,
              width: "40px",
            }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-leaf fa-2xl"
            style={{
              color: `${
                color.MaincolorTailwind == "bg-green-700" ? "green" : "black"
              }`,
              width: "40px",
            }}
          ></i>
        )}
      </button>
    </nav>
  );
}

export default TopNavbar;
