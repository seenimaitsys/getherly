import React from "react";
import "./index.scss";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/header";
import video from "../../assert/video1.mp4";
const desktop2_UpperBody = () => {
  const videoList = [
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
    {
      video: video,
      video_title: "How do i add a family member?",
    },
  ];
  return (
    <>
      <Header />
      <div className="desktop2-main-con">
        <div className="pp"></div>
        <div className="videolist-continer">
          {videoList.map((list, index) => {
            return (
              <div className="video-div" key={index}>
                <video width="183px" height="100px" controls>
                  <source src={list.video} type="video/mp4" />
                </video>
                <p>{list.video_title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default desktop2_UpperBody;
