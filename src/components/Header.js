import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import background from "../images/background.png";

export default function Header() {
  return (
    <div id="main">
      <Navbar />
      <Link classID="main__container">
        <img
          src={background}
          className="main__container__img"
          alt="background"
        />
      </Link>
      <div className="name">
        <h1>
          It's a <span>ReactJS</span>
          <br /> Website
        </h1>
        <p>
          Most Calenders are designed for teams. This is designed for
          freelancers who want a simply way to plan their schools
        </p>
        <div className="header-btns">
          <a href="#" className="cv-btn">
            Hire Me
          </a>
          <a href="#" className="cv-btn1">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
