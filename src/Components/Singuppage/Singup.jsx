import React, { useState } from "react";
import authservice from "../../Appwrite/appwrite";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./Singup.css";

function Singup() {
  console.log(authservice.createaccount);
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [focus, setfocus] = useState(1);
  const color = useSelector((state) => state.colors.userdata);

  const { register, handleSubmit } = useForm();
  const create = async (data) => {
    if (loader == false) setloader(true);
    console.log(data);
    try {
      const userdata = await authservice.createaccount(data);

      if (userdata) {
        const user = await authservice.getcurrentuser();
        if (user && loader) setloader(false);
        if (user) navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  setTimeout(() => {
    document
      .getElementById(
        `${
          (focus == 1 ? "username" : null,
          focus == 2 ? "email" : null,
          focus == 3 ? "password" : null)
        }`
      )
      .focus();
  }, 600);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-3/4 h-full pb-20 fixed  overflow-scroll right-0 flex items-center justify-center bg-white flex-row  `}
    >
      <form
        onSubmit={handleSubmit(create)}
        className={`w-3/4 h-auto ${color.sidemainTailwind} rounded-md flex items-center justify-start flex-col p-2 flex-wrap`}
      >
        <h2
          className={`w-full h-10 bg-gray-400 mb-10 rounded-sm text-xl text-white font-bold flex items-center justify-center `}
        >
          Fill all details
        </h2>
        <label
          className={`w-3/4 h-auto text-md bg-gray-400 p-2 rounded-md mb-1 text-white`}
        >
          <i className="fa-solid fa-user mx-2"></i>
          Username:-
        </label>
        <input
          id="username"
          className={`w-3/4 h-10 p-2 border-none outline-none mb-3 ${color.BorderTailwind} rounded-sm`}
          label="Username: "
          placeholder="Enter your name"
          onPointerEnter={() => setfocus((prev) => prev + 1)}
          {...register("name", { required: true })}
        />

        <label
          className={`w-3/4  h-auto text-md bg-gray-400 p-2 rounded-md mb-1 text-white`}
        >
          <i className="fas fa-envelope mx-2"></i>
          Email:-
        </label>
        <input
          className={`w-3/4 p-2 h-10 border-none outline-none mb-3 ${color.BorderTailwind} rounded-sm`}
          label="Email: "
          id="email"
          onPointerEnter={() => setfocus((prev) => prev + 1)}
          placeholder="Enter your email"
          type="email"
          {...register("email", { required: true })}
        />

        <label
          className={`w-3/4 h-auto text-md bg-gray-400 p-2 rounded-md mb-1 text-white`}
        >
          <i className="fa fa-key mx-2" aria-hidden="true"></i>
          Password:-
        </label>
        <input
          className={`w-3/4 p-2 h-10 border-none outline-none mb-3 ${color.BorderTailwind} rounded-sm`}
          label="Password: "
          onPointerEnter={() => setfocus((prev) => prev - 2)}
          placeholder="Enter your password"
          id="password"
          type="password"
          warning="true"
          showpassword="true"
          {...register("password", { required: true, minLength: 8 })}
        />
        <button
          type="submit"
          id="create"
          className={`w-full h-8 text-white flex items-center justify-center rounded-md bg-gray-400`}
        >
          {loader ? <div className={`loader`} /> : "Creater Account"}
        </button>
      </form>
    </motion.div>
  );
}

export default Singup;
