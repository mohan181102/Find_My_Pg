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
import Rent from "./Components/Rent/Rent.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import Setting from "./Components/Setting/Setting.jsx";
import Singup from "./Components/Singuppage/Singup.jsx";

const loginstatus = false;

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
        path: "/rent",
        element: <Rent />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/bookpage",
        element: <BookPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/singup",
        element: <Singup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);
