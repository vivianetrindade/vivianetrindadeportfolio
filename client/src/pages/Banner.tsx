import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import myPicture from "../assets/meblackandwhite.png";

const Banner: React.FC = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Viviane Trindade`}{" "}
              <span className="wrap">FullStack Developer</span>
            </h1>
            <div style={{ marginTop: "20px" }}>
              <p>
                I love arrange solutions for helping people to solve their
                problems. Being a software developer gave me this opportunity.{" "}
              </p>
              <p>
                This is a space to you know more about what I worked on and to
                make new connections.{" "}
              </p>
              <p>Please feel free to have a look and reach me on LinkedIn.</p>
            </div>

            <button>
              {" "}
              <a href="#contact">
                Let's connect <ArrowRightCircle size={25} />
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={myPicture} alt="Me" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
