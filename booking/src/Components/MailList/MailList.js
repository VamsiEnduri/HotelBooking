import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Money ,Save Time</h1>
      <p className="mailDesc">SignUp and we will send best deals to you</p>
      <div className="mailContainer">
        <input type="text" placeholder="YourEmail" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
