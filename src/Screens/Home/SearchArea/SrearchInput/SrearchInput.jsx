import { Input } from "@mui/material";
import React from "react";
import "./SrearchInput.css";
import SearchIcon from "@mui/icons-material/Search";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const SrearchInput = () => {
  return (
    <div className="input_filde">
      <div className="right-serch">
        <SearchIcon />
        <Input
          className="input"
          type="text"
          placeholder="Serach by name, edu, exp or #tag"
        />
      </div>
      <ErrorOutlineIcon />
    </div>
  );
};

export default SrearchInput;
