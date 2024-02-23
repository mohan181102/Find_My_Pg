import React from "react";
import SideBar from "./Components/SideNavbar/SideBar";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <TopNavbar />
      <SideBar />
      <Outlet/>
    </div>
  );
}

export default App;
