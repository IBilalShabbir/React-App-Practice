import React from "react";
import Box from "./Box";
import image1 from "../images/s1.png";
import image2 from "../images/s2.png";

export default function Services() {
  return (
    <div id="services">
      <div className="f-heading">
        <h1>Services</h1>
        <p>Here are some Services of the software</p>
      </div>
      <div className="b-container">
        <Box image={image1} alt="image1" button="Python" />
        <Box image={image2} alt="image1" button="React" />
      </div>
    </div>
  );
}
