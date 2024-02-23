import React, { useEffect, useState } from "react";
import "./Profile.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Profile() {
  const [email, setemail] = useState("sda");
  
  const color = useSelector((state) => state.colors.userdata);

  async function check() {
    console.log("reache");
    const res = await fetch("http://localhost:8006/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "asass",
      }),
    });

    console.log(res);
  }

  // check();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-3/4 h-full pb-20 fixed  overflow-scroll right-0 flex items-center justify-center bg-white flex-row  `}
    >
      <div
        style={{
          backgroundImage: `url(
            https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=M3w1MzU4MDd8MHwxfHNlYXJjaHwxMTh8fHVzZXIlMjB8ZW58MHx8fHwxNzA4NDMwMzk4fDA&ixlib=rb-4.0.3
          )`,
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
        className={` w-full h-full pb-20 pt-10 overflow-scroll flex items-center justify-center flex-wrap   `}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            backgroundImage: `url(
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=M3w1MzU4MDd8MHwxfHNlYXJjaHwxMTh8fHVzZXIlMjB8ZW58MHx8fHwxNzA4NDMwMzk4fDA&ixlib=rb-4.0.3"
            )`,
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
          className={`profilimg relative top-3 flex justify-center rounded-md items-end `}
        >
          <h2
            className={`profilename w-full h-auto text-md pl-2 rounded-b-md  ${color.sidemainTailwind} text-white`}
          >
            Profile photo
          </h2>
        </div>
        <table className={`table ${color.MaincolorTailwind}`}>
          <tr className={`rowprofile `}>
            <th className={` ${color.MaincolorTailwind}  `}>First_Name</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Mohan
            </td>
          </tr>
          <tr className={`rowprofile`}>
            <th className={` ${color.MaincolorTailwind}  `}>Last Name</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Jaiswal
            </td>
          </tr>
          <tr className={`rowprofile `}>
            <th className={` ${color.MaincolorTailwind} `}>Email</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Mohanjaiswal@gmail.com
            </td>
          </tr>
          <tr className={`rowprofile `}>
            <th className={` ${color.MaincolorTailwind} `}>Location</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Mirzapur{" "}
            </td>
          </tr>
        </table>
      </div>
    </motion.div>
  );
}

export default Profile;
