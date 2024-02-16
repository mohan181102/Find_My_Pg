import React, { useState } from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBar() {
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
      name: "Login",
      Navigate: "/login",
    },
  ];

  return (
    <div
      className={`w-1/4  h-full bg-green-500 fixed
       left-0 flex items-top   justify-center`}
    >
      <ul id="ulforsidebar">
        {navigatearray.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={`liforsidebar${
                location.pathname == item.Navigate ? "active" : ""
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
