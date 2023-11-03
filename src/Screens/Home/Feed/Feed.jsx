import React from "react";
import "./Feed.css";

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
      <div className="feed-list_area">
        <div className="list-right">
          <input type="checkbox" />
        </div>
        <div className="list-mid">
          <img
            className="profile-img"
            src="https://th.bing.com/th/id/OIP.hsmILTRwPf3P8LTYzVaCYwHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
          />
        </div>
        <div className="list-left">
          <div className="people-name">Aaliyah Sanderson</div>
          <div className="people-location">Riyadh, Saudi Arabia</div>
          <div className="people-degre">
            Bachelor - Cambridge University (2023 - 2023)
          </div>
          <div className="people-hashtag">#top_candidate #top_candidate</div>
          <div className="people-button">
            <button>New York</button>
            <button>Marketing</button>
            <button>London</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
