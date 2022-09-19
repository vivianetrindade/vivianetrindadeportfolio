import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import Icon1 from '../assets/github.png';
import Icon2 from '../assets/linkedin.png';
import {
  BrowserRouter,
} from "react-router-dom";

const NavbarComponent: React.FC = () => {
const [activeLink, setActiveLink] = useState<String>('home');
const [scrolled, setScrolled] = useState<Boolean>(false);

useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener('scroll', onScroll);

  return () => window.removeEventListener('scroll', onScroll);
}, []);

const updateActiveLink = (path: String) => {

  setActiveLink(path);

}
  return (
    <BrowserRouter>
    
    <Navbar expand="md" className={scrolled ? 'scrolled': ''}>
      <Container>
        
        <Navbar.Brand href="/">
          <img className='monogram' src={logo} alt='monogram'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => updateActiveLink('home')}> Home</Nav.Link>
            <Nav.Link href="#technologiesandtools" className={activeLink === 'technologiesandtools' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => updateActiveLink('technologiesandtools')}>Skills and Technologies</Nav.Link>
            <Nav.Link href="#projectstimeline"className={activeLink === 'projectstimeline' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => updateActiveLink('projectstimeline')}>Projects Timeline</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => updateActiveLink('contact')}>Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className='navbar-text'>
            <div className='social_icon'>
              <a href='https://github.com/vivianetrindade' target='_blank' rel='noreferrer'><img className='icons'src={Icon1} alt='github icon'/></a>
              <a href='https://www.linkedin.com/in/viviane-trindade/'><img className='icons' src={Icon2} alt='linkedin icon'/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </BrowserRouter>
  );
}

export default NavbarComponent;