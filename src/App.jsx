import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <div className="app-main_container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Home />
    </div>
  );
}

export default App;
