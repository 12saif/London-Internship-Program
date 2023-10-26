import React from "react";
import "./SrearchArea.css";
import SrearchInput from "../SrearchInput/SrearchInput";
import Filter from "../Filter/Filter";

const SrearchArea = () => {
  return (
    <div className="sreach_area-container">
      <SrearchInput />
      <Filter />
    </div>
  );
};

export default SrearchArea;
