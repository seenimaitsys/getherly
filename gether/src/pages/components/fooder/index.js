import React from "react";
import "./index.scss";
import { HeaderSubheader, Header } from "semantic-ui-react";
import { Container, Row, Col } from "react-bootstrap";
import getherly from "../../../assert/getherlyfooter.svg";
const fooder = () => {
  return (
    <>
      <Container style={{ position: "relative", marginTop: "20vh" }}>
        <Row>
          <Col sm={3}>
            <div style={{ display: "flex" }}>
              <img
                src={getherly}
                alt="s"
                style={{
                  width: "60px",
                  height: "57.343px",
                  flexShrink: "0",
                }}
              ></img>

              <div id="fooder-getherly-logo"></div>
            </div>
          </Col>
          <Col sm={3}>
            <Header
              className="footer-head"
              style={{
                color: "#000",

                fontFamily: "Poppins",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Get in touch
            </Header>

            <HeaderSubheader className="fooder-col">
              Boston , USA
            </HeaderSubheader>

            <HeaderSubheader className="fooder-col">
              Info@email.com
            </HeaderSubheader>
          </Col>
          <Col sm={3}>
            <Header
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Learn more
            </Header>

            <HeaderSubheader className="fooder-col">
              Terms of use
            </HeaderSubheader>
            <HeaderSubheader className="fooder-col">
              Privacy Policy
            </HeaderSubheader>
          </Col>

          <Col sm={3}>
            <HeaderSubheader>
              <img
                src={getherly}
                alt="s"
                style={{
                  width: "60px",
                  height: "57.343px",
                  flexShrink: "0",
                }}
              ></img>
            </HeaderSubheader>
            <HeaderSubheader className="fooder-login">Log in</HeaderSubheader>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default fooder;
