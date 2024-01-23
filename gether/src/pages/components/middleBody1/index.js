import React from "react";
import "./index.scss";

import image7 from "../../../assert/image7.png";
import image8 from "../../../assert/image8.png";
import image12 from "../../../assert/image12.png";
import image10 from "../../../assert/image10.png";
import image11 from "../../../assert/image11.png";
import image9 from "../../../assert/image9.png";
import robot from "../../../assert/robot.png";

const middleBody = () => {
  const List1 = [
    {
      Title: "Family network",
      img: image7,
      content:
        "Add your family members to connect with your family members easily and watch how your family network Grows.",
    },
    {
      Title: "Chat",
      img: image8,
      content:
        "Chat and stay Connected with your family members with our Chat Feature.",
    },
    {
      Title: "Group Chat",
      img: image9,
      content:
        "Connect with multiple members from your family and create a group to access every one of them easily.",
    },

    {
      Title: "Audio/Video Calls",
      img: image10,
      content:
        "You can always Voice or Video call through our app to connect with your family and update on what’s happening.",
    },
    {
      Title: "Active Feed",
      img: image11,
      content:
        "Create and post Memories as photographs or videos to your feed and have the extra Bond with your Family.",
    },
    {
      Title: "How am i connected",
      img: image12,
      content:
        "Getherly allows you to see your long distant relatives and how you are connected with them.",
    },
  ];

  return (
    <>
      <div className="app-features-head">
        <p>APP FEATURES</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
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
          {List1.map((list, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "390px",
                }}
                key={index}
              >
                <div style={{ marginRight: "10px" }}>
                  <img src={list.img} alt=""></img>
                </div>
                <div style={{ width: "400px", alignItems: "self-start" }}>
                  <div className="info-heading">{list.Title}</div>
                  <div className="info-inner-contend">{list.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default middleBody;
