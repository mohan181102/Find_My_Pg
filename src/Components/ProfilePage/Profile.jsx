import React from "react";
import "./Profile.css";

function Profile() {
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
