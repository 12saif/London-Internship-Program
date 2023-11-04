import React from "react";
import "./Feed.css";
import data from "./data,jsx";


const Feed = () => {
  return (
    <div className="feed_section">
      <div className="top_feed">
        <div className="right-feed">
          <input type="checkbox" />
          <div>247 Candidates</div>
        </div>
        <div className="left-feed">
          <div className="counter-section">Qualified</div>|
          <div className="counter-section">
            Task<span className="counter-icon">25</span>|
          </div>
          <div className="counter-section">
            Disqualified<span className="counter-icon">78</span>
          </div>
        </div>
      </div>
      {/* people listing */}
      {data.map((item) => (
        <div className="feed-list_area">
          <div className="list-right">
            <input type="checkbox" />
          </div>
          <div className="list-mid">
            <img className="profile-img" src={item.image} />
          </div>
          <div className="list-left">
            <div className="people-name">{item.name}</div>
            <div className="people-location">{item.location}</div>
            <div className="people-degre">{item.degre}</div>
            <div className="people-hashtag">{item.hashtag}</div>
            <div className="people-button">
              <button>New York</button>
              <button>Marketing</button>
              <button>London</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
