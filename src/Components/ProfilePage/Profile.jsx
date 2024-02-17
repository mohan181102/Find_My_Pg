import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [email, setemail] = useState("sda");

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
    <div className="profile">
      <div className="underprofile">
        <img
          src={``}
          style={{
            width: "180px",
            height: "180px",
            border: "1px solid green",
          }}

          //   className={`border-spacing-2 hover:border hover:border-spacing-1 hover:border-green-500 w-40 h-40`}
        />
        <table className="table">
          <tr className="rowprofile">
            <th>First_Name</th>
            <td>Mohan</td>
          </tr>
          <tr className="rowprofile">
            <th>Last Name</th>
            <td>Jaiswal</td>
          </tr>
          <tr className="rowprofile">
            <th>Email</th>
            <td>Mohanjaiswal@gmail.com</td>
          </tr>
          <tr className="rowprofile">
            <th>Location</th>
            <td>Mirzapur </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;
