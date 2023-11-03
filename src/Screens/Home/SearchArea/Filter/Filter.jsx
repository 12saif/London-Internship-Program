import React from "react";
import "./Filter.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-top">
        <h4>Filter</h4>
        <div className="select-counter">0 Selected</div>
      </div>

      <div className="filter-section_top">
        <div className="rigth_section">
          <div className="filter-icon">
            <DescriptionOutlinedIcon fontSize="20" />
          </div>
          <div className="filter-title">Personal Information</div>
        </div>
        <div className="dropDown-icon">
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="filter-section_top">
        <div className="rigth_section">
          <div className="filter-icon">
            <DescriptionOutlinedIcon fontSize="20" />
          </div>
          <div className="filter-title">Education</div>
        </div>
        <div className="dropDown-icon">
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="filter-section_top">
        <div className="rigth_section">
          <div className="filter-icon">
            <DescriptionOutlinedIcon fontSize="20" />
          </div>
          <div className="filter-title">Work Experience</div>
        </div>
        <div className="dropDown-icon">
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="filter-section_top">
        <div className="rigth_section">
          <div className="filter-icon">
            <DescriptionOutlinedIcon fontSize="20" />
          </div>
          <div className="filter-title">Activity Filter</div>
        </div>
        <div className="dropDown-icon">
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div className="filter-section_bottom">
        <div className="rigth_section">
          <div className="filter-icon">
            <DescriptionOutlinedIcon fontSize="20" />
          </div>
          <div className="filter-title">Advanced Filter</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
