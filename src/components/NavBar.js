import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home', 'skills', 'project');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <span className="porfolio">PORTFOLIO</span>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mariam-dateshidze-08a423208/" target="blanck"> <BsLinkedin  /></a>
                <a href="https://github.com/mariamdateshidze"  target="blanck"> <BsGithub  /></a>
                <a href="mailto: dateshidze.mariam6@gmail.com"  target="blanck"> <AiOutlineMail  /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  )
}