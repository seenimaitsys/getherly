import React from "react";
import "./index.scss";
import image from "../../../assert/mobile1.png";
import { Container, Row } from "react-bootstrap";
import image2 from "../../../assert/mobile2.png";
import image3 from "../../../assert/image13.png";
import image4 from "../../../assert/image14.png";
import image5 from "../../../assert/image15.png";
const PlayerComponent = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20vh",
        }}
      >
        <div className="main-lowerbody-con">
          <div className="mobiles-container">
            <img src={image2} alt="" className="small-mobile"></img>
            <img src={image} className="big-mobile" alt=""></img>
          </div>
          <div className="lowerBody-side-con">
            <Row>
              <p className="child-1">How it Works</p>
            </Row>
            <Row>
              <p className="child-2">
                Download the app, create your family network, you're all set!
              </p>
            </Row>
            <Row>
              <p className="child-3">
                {" "}
                Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                consectetur purus sit amet fermentum. Integer posuere erat a
                ante venenatis dapibus posuere velit aliquet. Nulla vitae elit
                libero. Etiam porta sem malesuada magna mollis euismod. Fusce
                dapibus, tellus ac cursus commodo.
              </p>
            </Row>
            <div className="steps-continer">
              <Row>
                <Row>
                  <img className="child-img1" src={image3} alt=""></img>
                </Row>
                <Row>
                  <p className="child-4">1.Download</p>
                </Row>
                <Row>
                  <p className="child-5">
                    Nulla vitae elit libero elit non porta eget.
                  </p>
                </Row>
              </Row>
              <Row>
                <Row>
                  <img className="child-img1" src={image4} alt=""></img>
                </Row>
                <Row>
                  <p className="child-4">2.Add family members</p>
                </Row>
                <Row>
                  <p className="child-5">
                    Nulla vitae elit libero elit non porta eget.
                  </p>
                </Row>
              </Row>
              <Row>
                <Row>
                  <img className="child-img1" src={image5} alt=""></img>
                </Row>
                <Row>
                  <p className="child-4">3.Start Connecting</p>
                </Row>
                <Row>
                  <p className="child-5">
                    Nulla vitae elit libero elit non porta eget.
                  </p>
                </Row>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default PlayerComponent;
