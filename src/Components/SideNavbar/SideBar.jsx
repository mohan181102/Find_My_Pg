import React, { useState } from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBar() {
  const color = useSelector((state) => state.colors.userdata);
  console.log("from sidebar", color);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginstatus, setloginstatus] = useState(true);
  const [activestatus, setactivestatus] = useState(false);

  console.log(location);
  const navigatearray = [
    {
      name: loginstatus ? "Home" : "Welcome",
      Navigate: "/",
    },
    {
      name: "Profile",
      Navigate: "/profile",
    },
    {
      name: "Search",
      Navigate: "/search",
    },
    {
      name: "Rent",
      Navigate: "/rent",
    },
    {
      name: "Setting",
      Navigate: "/setting",
    },
    {
      name: "Logout",
      Navigate: "/logout",
    },
    {
      name: loginstatus ? "" : "Login",
      Navigate: "/login",
    },
    {
      name: "Sinup",
      Navigate: "/singup",
    },
  ];

  return (
    <div
      className={`w-1/4 main  h-full ${color.sidemainTailwind} fixed
       left-0 flex items-top   justify-center`}
    >
      <ul
        id="ulforsidebar"
        style={{ backgroundColor: `${color.sidemainTailwind}` }}
      >
        {navigatearray.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={`liforsidebar ${color.HoverTailwind} ${
                color.MaincolorTailwind == "bg-black" ? "hover:text-white" : ""
              } ${
                location.pathname == item.Navigate
                  ? `active ${color.MaincolorTailwind} text-white ${color.BorderTailwind}`
                  : ""
              }`}
              to={item.Navigate}
            >
              {item.name}
              {location.pathname == item.Navigate ? (
                <i class="fa-solid fa-arrow-right"></i>
              ) : (
                ""
              )}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
