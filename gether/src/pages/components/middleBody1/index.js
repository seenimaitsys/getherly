import React, { useState } from "react";
import "./index.scss";
import { Container, Row, Col, Image, Spinner, Card } from "react-bootstrap";
import {
  HeaderSubheader,
  HeaderContent,
  Header,
  Icon,
} from "semantic-ui-react";
import image7 from "../../../assert/image7.png";
import image8 from "../../../assert/image8.png";
import image12 from "../../../assert/image12.png";
import image10 from "../../../assert/image10.png";
import image11 from "../../../assert/image11.png";
import image9 from "../../../assert/image9.png";
import robot from "../../../assert/robot.png";

const middleBody = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#929292",
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        APP FEATURES
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="info-contain">
          <img src={robot} alt=""></img>
          <p>
            Getherly is the Only App you need to<br></br> Connect with your
            Family<br></br> and watch your Network Grow.
          </p>
          <div className="right-side-img"></div>
        </div>
        <div className="feature-info-main-con">
          <div style={{ display: "flex", width: "390px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={image7} alt=""></img>
            </div>
            <div style={{ width: "400px", alignItems: "self-start" }}>
              <div className="info-heading">Family network</div>
              <div className="info-inner-contend">
                Add your family members to connect with your family members
                easily and watch how your family network Grows.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "390px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={image8} alt=""></img>
            </div>
            <div style={{ width: "400px", alignItems: "self-start" }}>
              <div className="info-heading">Chat</div>
              <div className="info-inner-contend">
                Chat and stay Connected with your family members with our Chat
                Feature.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "390px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={image9} alt=""></img>
            </div>
            <div style={{ width: "400px", alignItems: "self-start" }}>
              <div className="info-heading">Group Chat</div>
              <div className="info-inner-contend">
                Connect with multiple members from your family and create a
                group to access every one of them easily.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "390px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={image10} alt=""></img>
            </div>
            <div style={{ width: "400px", alignItems: "self-start" }}>
              <div className="info-heading">Audio/Video Calls</div>
              <div className="info-inner-contend">
                You can always Voice or Video call through our app to connect
                with your family and update on what’s happening.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "390px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={image11} alt=""></img>
            </div>
            <div style={{ width: "400px", alignItems: "self-start" }}>
              <div className="info-heading">Active Feed</div>
              <div className="info-inner-contend">
                Create and post Memories as photographs or videos to your feed
                and have the extra Bond with your Family.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "390px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={image12} alt=""></img>
            </div>
            <div style={{ width: "400px", alignItems: "self-start" }}>
              <div className="info-heading">How am i connected</div>
              <div className="info-inner-contend">
                Getherly allows you to see your long distant relatives and how
                you are connected with them.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default middleBody;
