import React from "react";
import "./Home.css";
import ScrollService from "../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="social">
            <div className="social-icon">
              <a href="https://www.facebook.com/nikku.kayastha/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/pratiksha-karn-9139a921a/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@digitalprinsu">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm{" "}
              <span className="highlighted-text">Pratiksha Karn</span>
            </span>
          </div>

          {/* ------------------------DESIGNATION------------------ */}
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>React/React Native Developer </h1>
              <span className="profile-role-tagline">
                Fast learner efficient in working in React JS & React Native.
              </span> 
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me{" "}
            </button>
            <a
              href="Resume_PratikshaKarn.pdf"
              download="Resume_PratikshaKarn.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
