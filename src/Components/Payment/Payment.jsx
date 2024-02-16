import React, { useRef, useState } from "react";
import BookProcess from "../Bookprocess/BookProcess";
import { data } from "./Children";
function Payment() {
  const maindata = data;
  return (
    <div
      className={`w-3/4 h-full pb-20 fixed  overflow-scroll right-0  flex items-center justify-start pt-8 bg-white flex-col `}
    >
      <BookProcess children={maindata} />
    </div>
  );
}

export default Payment;
