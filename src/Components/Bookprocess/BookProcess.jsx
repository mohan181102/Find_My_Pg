import React, { useEffect, useState } from "react";
import "./BookProcess.css";
import Payment from "../Payment/Children";

function BookProcess({ ProcessNumber, children, Bgcolor, LineColor, ref }) {
  const [array, setarray] = useState([1, 2, 3]);
  const [currentStep, setcurrrentStep] = useState(1);
  const [isCompleted, setCompleted] = useState(false);
  const [componentNo, setcomponentNo] = useState(0);
  // useEffect(()=>setarray({ProcessNumber}),[])
  console.log(array);
  const data = function handlesubmit(e) {
    setcurrrentStep((prev) => prev + 1);
    if (componentNo <= array.length) {
      setcomponentNo((prev) => prev + 1);
    }
    if (currentStep == array.length) {
      setCompleted(true);
    }
  };

  console.log(ref);
  function progessBar() {
    // console.log(e);
    let progres = ((currentStep - 1) / (array.length - 1)) * 100;
    if (progres < 100) {
      return progres;
    } else if (progres >= 100) {
      return 100;
    }
  }

  return (
    <div
      className={`w-3/4 h-full fixed top-0 right-0 flex  justify-center  items-center flex-col gap-1`}
    >
      <ul
        className={`ul w-3/4 mt-10 h-1/4 flex justify-between items-center  `}
      >
        {array.map((item, index) => {
          return (
            <li
              className={`li inline-block z-10 w-10 h-10 bg-pink-500 ${
                currentStep > index + 1 || isCompleted ? "complete" : ""
              }${currentStep == index + 1 ? "activ" : ""}`}
              key={index}
            >
              {currentStep > index + 1 || isCompleted ? "ok" : index + 1}
            </li>
          );
        })}

        <div className={`w-3/4 h-1 absolute bg-slate-400 `}>
          <div style={{ width: `${progessBar()}%` }} className={`pregress`} />
        </div>
      </ul>

      <div className={`w-full h-full`}>
        <Payment />
      </div>

      {!isCompleted ? (
        <button
          onClick={(e) => data(e)}
          className={`w-24 p-2 mb-2 h-auto bg-slate-500 border-none rounded-md  text-white flex items-center justify-center`}
        >
          {currentStep == array.length ? "Finish" : "Next"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default BookProcess;
