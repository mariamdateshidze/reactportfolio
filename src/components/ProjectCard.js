import { Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Nav className="visit">
              <Nav.Link href={url}  target="blanck">Visit</Nav.Link>
            </Nav>
        </div>
      </div>
    </Col>
  )
}