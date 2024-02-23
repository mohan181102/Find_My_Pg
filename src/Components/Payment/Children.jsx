import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const color = useSelector((state) => state.colors.userdata);
  const ways = [
    {
      name: "UPI",
      comment: "scan QR code",
    },
    {
      name: "Card",
      comment: "use your Debit/Credit card",
    },
  ];

  const cardpay = async () => {
    const strip = await loadStripe(
      "pk_live_51OkIcdSGxUQ58TBkBnwwKVVG0sRZAMKiSpu9Z1QKcMkUAQD2ed8doSdI390uHXfuYREa2ru7PcV47lFRpd4EZ5Bc00nieoLMW8"
    );

    const body = {
      products: {
        price: "1",
        PG: "demo",
      },
    };

    const response = await fetch("http://localhost:8006/cardpay/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = strip.redirectToCheckout({
      sessionId: session.id,
    });

    if ((await result).error) {
      console.log(result.error);
    }
  };

  const upipay = async () => {
    console.log("upi way");
  };
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1" }}
      exit={{ opacity: "0" }}
      className={`w-auto  h-full  pt-4  overflow-scroll flex items-center justify-start bg-white flex-col `}
    >
      <h2
        className={`w-3/4
         h-10 flex items-center justify-start text-xl text-white font-bold px-2 rounded-md ${color.sidemainTailwind}`}
      >
        Payment Ways
      </h2>
      <div
        className={`w-3/4 h-auto rounded-md flex items-center justify-center`}
      >
        {ways.map((item, index) => {
          return (
            <li
              key={index}
              onClick={
                item.name == "Card" ? cardpay : item.name == "UPI" ? upipay : ""
              }
              className={` w-3/4   h-14 rounded-md cursor-pointer bg-gray-500 m-2 p-2 flex items-center justify-start text-xl text-white font-bold `}
            >
              <h3 className={`w-1/4 h-full p-2 flex items-center gap-2 `}>
                {item.name == "Card" ? (
                  <i className="fa-solid fa-credit-card"></i>
                ) : (
                  ""
                )}
                {item.name}
              </h3>
              <p
                className={`w-auto h-full flex items-center justify-start px-2 text-md`}
              >
                {item.comment}
              </p>
            </li>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Payment;
