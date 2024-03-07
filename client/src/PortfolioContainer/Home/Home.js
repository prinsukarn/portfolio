import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container">
      <Header />
      <Profile />
    </div>
  );
}
