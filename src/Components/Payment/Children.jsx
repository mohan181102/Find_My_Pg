import axios from "axios";
import React from "react";

const page1 = () => {
  return (
    <div className={`w-full h-full`}>
      <table className={`w-full`}>
        <tr className=" h-10">
          <th>HotelName</th>
          <td>Hotelname</td>
        </tr>
        <tr className=" h-10">
          <th>Owner Name</th>
          <td>Owner_name</td>
        </tr>
        <tr className=" h-10">
          <th>Location</th>
          <td>Location_details</td>
        </tr>
        <tr className=" h-10">
          <th>Contact</th>
          <td>MobileNo.</td>
        </tr>
      </table>
    </div>
  );
};
const payment = () => {
  return (
    <div
      className={`w-full h-3/4  border border-spacing-1 border-black `}
    ></div>
  );
};
const done = () => {
  return (
    <div className={`w-full h-3/4  border border-spacing-1 border-black `}>
      sds
    </div>
  );
};

export const data = [
  {
    name: "PG details",
    component: page1(),
  },
  {
    name: "Payment way",
    component: payment(),
  },
  {
    name: "Finish",
    component: done(),
  },
];
