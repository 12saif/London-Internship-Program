import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
  return (
    <div className="app-main_container">
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
