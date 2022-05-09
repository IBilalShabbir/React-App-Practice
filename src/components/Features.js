import React from "react";
import { Link } from "react-scroll";
import Frame from "../images/Frame19.png";

export default function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <Link classID="Frame__Image ">
          <img src={Frame} alt="Frame" />
        </Link>
        <div className="features-text">
          <h2>Features</h2>
          <h3>
            This Application <span>is Art</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolore explicabo temporibus velit consequuntur commodi perferendis
            numquam nemo ad ea, quod repellat asperiores, nostrum facilis
            quibusdam, sequi eaque maxime? Repellat!
          </p>
          <button>View More Features</button>
        </div>
      </div>
    </div>
  );
}
