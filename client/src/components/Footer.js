import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';
import Icon1 from '../assets/github.png';
import Icon2 from '../assets/linkedin.png';

const Footer = () => {

  return (
    <footer className='footer'>
      <Container>
        <Row className='align-item-center'>
          <Col sm={6}>
            <img src={logo} alt='logo'/>
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
          <div className='social_icon'>
              <a href='https://github.com/vivianetrindade'><img className='icons'src={Icon2} alt='github icon'/></a>
              <a href='https://www.linkedin.com/in/viviane-trindade/'><img className='icons' src={Icon1} alt='linkedin icon'/></a>
            </div>
            <p>Copyrigth 2022 Rights reserved by Viviane Trindade</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;