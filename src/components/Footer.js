import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/mariam-dateshidze-08a423208/" target="blanck"> <BsLinkedin  /></a>
                <a href="https://github.com/mariamdateshidze"  target="blanck"> <BsGithub  /></a>
                <a href="mailto: dateshidze.mariam6@gmail.com"  target="blanck"> <AiOutlineMail  /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}