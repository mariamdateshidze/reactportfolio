import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/midterm.webp";
import projImg2 from "../assets/images/final.webp";
import projImg3 from "../assets/images/skyhouse.webp";
import projImg4 from "../assets/images/store.webp";
import projImg5 from "../assets/images/zoo.webp";
import projImg6 from "../assets/images/todo.webp";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Markup",
      description: "This Project is built with HTML and CSS.",
      imgUrl: projImg1,
      url: "https://mariamdateshidze.github.io/Exam/",
    },
    {
      title: "Personal portfolio",
      description: "This Project is built with HTML, CSS and Javascript. It'Personal Portfolio Website Example.",
      imgUrl: projImg2,
      url:"https://mariamdateshidze.github.io/Final-project/",
    },
    {
      title: "Zootopia",
      description: "This Project is built with HTML, CSS and Javascript. It's Online shop for animals food.",
      imgUrl: projImg5,
      url:"https://mariamdateshidze.github.io/Zootopia/",
    },
    {
      title: "Store",
      description: "This Project is built with HTML, CSS and React JS. It Fetches API data with Axios and displays it in a React app with hooks",
      imgUrl: projImg4,
      url:"https://store-self-kappa.vercel.app/",
    },
    {
      title: "SkyHouse",
      description: "This Project is built with HTML, CSS and Javascript.",
      imgUrl: projImg3,
      url:"https://mariamdateshidze.github.io/SkyHouse/",
    },
    {
      title: "To Do App",
      description: "This Project is ToDo App. You can add, delete and update your list items.",
      imgUrl: projImg6,
      url:"https://todo-app-zeta-rosy.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}