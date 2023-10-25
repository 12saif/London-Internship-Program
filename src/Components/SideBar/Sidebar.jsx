import React from "react";
import "./SideBar.css";
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
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side_bar-container">
      <div className="side_bar-top">
        <Link className="link" to="/profile">
          <AccountCircleOutlinedIcon />
        </Link>

        <Link className="link" to="/">
          <HomeOutlinedIcon />
        </Link>

        <Link className="link" to="/people">
          <PeopleOutlinedIcon />
        </Link>

        <Link className="link" to="/calendar">
          <EventAvailableOutlinedIcon />
        </Link>

        <Link className="link" to="/share">
          <ShareOutlinedIcon />
        </Link>

        <Link className="link" to="/document">
          <DescriptionOutlinedIcon />
        </Link>

        <Link className="link" to="/file">
          <TextSnippetOutlinedIcon />
        </Link>

        <Link className="link" to="/wishList">
          <FavoriteBorderOutlinedIcon />
        </Link>

        <Link className="link" to="/?">
          <ChevronLeftOutlinedIcon />
        </Link>
      </div>
      <div className="side_bar-bottom">
        <Link className="link" to="/setting">
          <SettingsOutlinedIcon />
        </Link>

        <Link className="link" to="/profile">
          <AccountCircleOutlinedIcon />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
