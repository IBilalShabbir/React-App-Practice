import React from "react";

export default function Box({ image, alt, button }) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={image} alt={alt} />
      </div>
      <div className="s-b-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex
          laboriosam.
        </p>
        <a href="#" className="cv-btn">
          {button}
        </a>
      </div>
    </div>
  );
}
