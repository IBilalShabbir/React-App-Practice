import React from "react";
import { Link } from "react-scroll";
import logo from "../images/React.png";

export default function Navbar() {
  return (
    <nav>
      <div className="navbarupper">
        <Link to="main">
          <img src={logo} className="logoimg1" alt="logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a to="main" className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a to="main" href="#">
              Features
            </a>
          </li>
          <li>
            <a to="main" href="#">
              Services
            </a>
          </li>
          <li>
            <a to="main" href="#">
              Subscriber
            </a>
          </li>
          <li>
            <a to="main" href="#">
              Contacts
            </a>
          </li>
        </ul>
        <span>
          <a className="APP" href="">
            Sign In
          </a>
        </span>
      </div>
      <div className="main__container"></div>
    </nav>
  );
}
