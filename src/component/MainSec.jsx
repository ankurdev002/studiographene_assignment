import React from "react";
import bigstar from "../assets/bigstar.png";
import person from "../assets/person.png";
import orangebox from "../assets/orangebox.png";
import starbtm from "../assets/starbtm.png";
import arrow from "../assets/arrow.png";

const MainSec = ({hamMenu}) => {
  return (
    <div className={hamMenu?"main-sec-content m-t":"main-sec-content"}>
      <div className="tag-line">
        <div className="tags">
          <h1 className="white-text">Fresh</h1>
          <h1 className="outline-text">2022</h1>
          <h1 className="white-text-2">Look</h1>
        </div>
        <div className="star-line">
          <hr />
          <img src={starbtm} />
        </div>
        <div className="see-div">
          <button>
            See More <img src={arrow} />
          </button>
        </div>
      </div>
      <div className="content-imgs">
        <div className="big-star">
          <img src={bigstar} />
        </div>
        <div className="jacket-person">
          <div className="jacket">
            <img src={person} />
          </div>
        </div>
        <div className="orange-box">
          <img src={orangebox} />{" "}
          <div className="price-tag">
            <h4>OREGON JACKET</h4>
            <h4>$124</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSec;
