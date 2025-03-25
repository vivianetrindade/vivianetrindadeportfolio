import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Check2Circle } from "react-bootstrap-icons";

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experienceandeducation">
      <h1 className="title">Experience and Education</h1>
      <Container className="experience__container">
        <Col>
          <Row className="experience">
            <h3>Experience</h3>
            <div className="experience__content">
              <div className="experience__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Developer</h4>
                  <p>Pagero (Part of Thomson Reuters)</p>
                  <p>April-2023 until present</p>
                </div>
              </div>
              <div className="experience__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Full-stack Developer Consultant</h4>
                  <p>School of applied technology</p>
                  <p>August-2022 until January-2023</p>
                </div>
              </div>
              <div className="experience__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Senior Contract Analyst (Health Insurance Company)</h4>
                  <p>Amil</p>
                  <p>February-2015 until June-2019</p>
                </div>
              </div>
              <div className="experience__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Senior Surgery Nurse</h4>
                  <p>Alvorada Brasilia Hospital</p>
                  <p>June-2011 until February-2015</p>
                </div>
              </div>
            </div>
          </Row>
        </Col>
        <Col>
          <Row className="education">
            <h3>Education</h3>
            <div className="education__content">
              <div className="education__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Full-stack JavaScript Bootcamp</h4>
                  <p>School of applied technology</p>
                  <p>May-2022 until August-2022</p>
                </div>
              </div>
              <div className="education__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Health Informatics Master's Degree</h4>
                  <p>Karolinska Institutet</p>
                  <p>August-2020 until July-2022</p>
                </div>
              </div>
              <div className="education__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Surgery Nurse Specialization</h4>
                  <p>São Camilo University</p>
                  <p>January-2010 until June-2012</p>
                </div>
              </div>
              <div className="education__details">
                <Check2Circle className="check" />
                <div>
                  <h4>Nurse Degree</h4>
                  <p>UniCEUB - Brasilia University Center</p>
                  <p>January-2004 until June-2009</p>
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default Experience;
