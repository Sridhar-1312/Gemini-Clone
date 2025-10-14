import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Sri.</span>
          </p>
          <p>How Can I Help You Today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Recommend books to read for personal growth</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Share healthy recipes for quick meals</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Give tips for improving productivity at work</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
