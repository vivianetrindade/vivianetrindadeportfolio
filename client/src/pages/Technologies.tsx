import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { CodeSlash } from "react-bootstrap-icons";

const Technologies: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 390 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills and Technologies</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Languages</h5>
                  <p>
                    <CodeSlash size={18} /> JavaScript
                  </p>
                  <p>
                    <CodeSlash size={18} /> Python
                  </p>
                  <p>
                    <CodeSlash size={18} /> TypeScript
                  </p>
                </div>
                <div className="item">
                  <h5>FrontEnd</h5>
                  <p>
                    <CodeSlash size={18} /> React
                  </p>
                  <p>
                    <CodeSlash size={18} /> Redux
                  </p>
                  <p>
                    <CodeSlash size={18} /> HTML
                  </p>
                  <p>
                    <CodeSlash size={18} /> Webpack
                  </p>
                  <p>
                    <CodeSlash size={18} /> CSS/SASS
                  </p>
                </div>
                <div className="item">
                  <h5>BackEnd</h5>
                  <p>
                    <CodeSlash size={18} /> NodeJS
                  </p>
                  <p>
                    <CodeSlash size={18} /> Express
                  </p>
                  <p>
                    <CodeSlash size={18} /> REST/
                    GraphQL
                  </p>
                  <p>
                    <CodeSlash size={18} /> MongoDB/
                    
                    PostgreSQL
                  </p>
                </div>
                <div className="item">
                  <h5>Tools</h5>
                  <p>
                    <CodeSlash size={18} /> Git/
                    GitHub
                  </p>
                  <p>
                    <CodeSlash size={18} /> Cypress
                  </p>
                  <p>
                    <CodeSlash size={18} /> Mocha/
                    Jest
                  </p>
                  <p>
                    <CodeSlash size={18} /> Heroku/
                    Netlify
                  </p>
                  <p>
                    <CodeSlash size={20} /> Mob Programming
                  </p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;
