import React from "react";
import "./TopHeader.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import { red } from "@mui/material/colors";

const TopHeader = () => {
  return (
    <header className="header_Conatainer">
      <div className="left-bar">
        London Internship Program
        <span className="london">London</span>
      </div>
      <div className="mid-bar">
        Opportunity Browsing
        <KeyboardArrowDownIcon />
      </div>
      <div className="right-bar">
        <div className="button-check_user">
          <SellOutlinedIcon color="#444444" sx={{ fontSize: 22 }} />
        </div>
        <div className="button-check_user">
          <PersonAddAltOutlinedIcon color="secondary" sx={{ fontSize: 22 }} />
        </div>
        <div className="button-check_user">
          <PersonSearchOutlinedIcon color="#444444" sx={{ fontSize: 22 }} />
        </div>
        <div className="button-check_user">
          <RecordVoiceOverOutlinedIcon color="#444444" sx={{ fontSize: 22 }} />
        </div>
        <div className="button-check_user">
          <MailOutlineIcon color="#444444" sx={{ fontSize: 22 }} />
        </div>
        <div className="right_videoCall-button-container">
          <div className="right_videoCall-button">Move To Video Interview</div>
          <div className="right_videoCall-button-icon">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
