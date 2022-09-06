/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Container, Row, Col  } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import myPicture from '../assets/meblackandwhite.png'


const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<Boolean>(false);
  const toRotate: String [] = ['FullStack Developer', 'Software Developer', 'Web Developer'];
  const [text, setText] = useState('');
  const [intervalNumber, setIntervalNumber] = useState<number>(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if(isDeleting) {
      setIntervalNumber(prevNumber => prevNumber/2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIntervalNumber(period);
    } else if ( isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIntervalNumber(500);
    }
  }

  useEffect (() => {
    let ticker = setInterval(() => {
      tick();
    }, intervalNumber)

    return () => { clearInterval (ticker)}
  }, [text])

  return (
    <section className="banner" id='home'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>{`Hi I'm Viviane Trindade`} <span className="wrap">{text}</span></h1>
            <p>I love arrange solutions for helping people to solve their problems. Being a software developer gave me this opportunity. </p>
            <p>This is a space to you know more about what I worked on and to make new connections. </p>
            <p>Please feel free to have a look and reach me on LinkeDin.</p>
            <button onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={myPicture} alt='My picture'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;