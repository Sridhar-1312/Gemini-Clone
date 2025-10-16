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
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini is offered in different variants such as Ultra, Pro, Flash, Nano (or similar) optimized for different tasks and compute constraints.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
