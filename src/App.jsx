import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/SideBar/Sidebar";
import TopHeader from "./Components/Header/TopHeader";

function App() {
  return (
    <div className="app-main_container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <TopHeader />
    </div>
  );
}

export default App;
