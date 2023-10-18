import React from "react";
import "./Home.css";
import TopHeader from "./Header/TopHeader";
import SrearchArea from "./SearchArea/SearchArea";
import Feed from './Feed/Feed';

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_header">
        <TopHeader />
      </div>
      <div className="search-and-FeedAreas">
        <SrearchArea />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
