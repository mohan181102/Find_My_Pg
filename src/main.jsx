import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Welcom from "./Components/Welcome page/Welcom.jsx";
import Profile from "./Components/ProfilePage/Profile.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Login from "./Components/Loginpage/Login.jsx";
import Searchpg from "./Components/SearchPg/Searchpg.jsx";
import BookPage from "./Components/BookPage/BookPage.jsx";
import Payment from "./Components/Payment/Payment.jsx";

const loginstatus = true;

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: loginstatus ? <Homepage /> : <Welcom />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Search",
        element: <Searchpg />,
      },
      {
        path: "/bookpage",
        element: <BookPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
    {/* <App /> */}
  </React.StrictMode>
);
