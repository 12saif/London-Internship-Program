import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Sidebar = () => {
  return (
    <div className="side_bar-container">
      <div className="side_bar-top">
        <AccountCircleOutlinedIcon />
        <HomeOutlinedIcon />
        <EventAvailableOutlinedIcon />
        <ShareOutlinedIcon />
        <DescriptionOutlinedIcon />
        <TextSnippetOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <ChevronLeftOutlinedIcon />
      </div>
      <div className="side_bar-bottom">
        <SettingsOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
};

export default Sidebar;
