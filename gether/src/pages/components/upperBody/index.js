import React, { useState } from "react";
import "./index.scss";

import { Button, Icon } from "semantic-ui-react";

import image2 from "../../../assert/image2.png";
import image3 from "../../../assert/image3.png";
import image4 from "../../../assert/image4.png";
import image1 from "../../../assert/elipes1.svg";

const UpperBody = () => {
  return (
    <>
      <div className="upper-main-contianer">
        <img src={image1} alt="" id="first-elips-img"></img>
        <div className="upper-side-continer">
          <img src={image2} alt="mobile"></img>
        </div>
        <div className="upper-content-main">
          <p>
            Discover, Connect, Communicate and<br></br> Celebrate with your{" "}
            <br></br>family and relatives.
          </p>
          <div>
            <p>
              Getherly is now available to Download from <br />
              both Google Play store and App Store
            </p>
          </div>
          <Button color="blue">
            <Icon name="apple" /> App Store
          </Button>
          <Button color="teal">
            <Icon name="google play" /> Google Play
          </Button>
        </div>
        <div className="dimend-img">
          <img src={image3} alt="l"></img>
          <div className="aa">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="182"
              height="105"
              viewBox="0 0 182 105"
              fill="none"
              className="dimend-lower-designs"
            >
              <path
                d="M90.9987 0.097404L181.043 52.1733L90.9987 104.249L0.954555 52.1733L90.9987 0.097404Z"
                fill="url(#paint0_linear_201_165)"
                fill-opacity="0.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_165"
                  x1="136.021"
                  y1="7.15126"
                  x2="45.9767"
                  y2="97.1954"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6C7BFF" />
                  <stop offset="1" stop-color="#31B5FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <img src={image4} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default UpperBody;
