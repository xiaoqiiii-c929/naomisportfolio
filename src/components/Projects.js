import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import { motion } from "framer-motion";


export const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Plant Imaging System",
      description: "Linux | Python | OpenCV",
      imgUrl: projImg1,
      previewUrl: "https://phase-sailboat-a20.notion.site/Plant-Imaging-System-c420279d2f3e47caa7f68ff90fb95747",
    },
    {
      id: 2,
      title: "Voice Controlled Car",
      description: "Circuits | C | Arduino",
      imgUrl: projImg2,
      previewUrl: "https://phase-sailboat-a20.notion.site/McDonald-s-the-GOAT-A-voice-controlled-car-fad61bcb6acb48f1829d7a2e4467cc56?pvs=4",
    },
    {
      id: 3,
      title: "Build My Own World",
      description: "Java",
      imgUrl: projImg3,
      previewUrl: "https://phase-sailboat-a20.notion.site/Build-My-Own-World-A-2D-tile-based-world-exploration-engine-46b31d2d168140689a4717b752c7d1a2?pvs=4",
    },
    {
      id: 4,
      title: "Membership Management Website",
      description: "Django | MySQL | HTML | CSS",
      imgUrl: projImg4,
      previewUrl: "https://phase-sailboat-a20.notion.site/Membership-Management-Website-A-Freelance-Project-ee0b6c33fe87496789d75336eaf8058e?pvs=4",
    },
    {
      id: 5,
      title: "Automation Script",
      description: "Python | Selenium | Appium",
      imgUrl: projImg5,
      previewUrl: "/",
    },
  ];

  return (
    <section className="project" id="projects">
          <h2>Projects</h2>
          <p>Here are a few past projects I've worked on. Want to see more? Feel free to shoot me an email at <a href="mailto:minyi.liu@berkeley.edu">minyi.liu@berkeley.edu</a> directly!</p>
          <Container fluid>
            <Row xs={1} md={2} lg={3}>
              {
                projects.map((project, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                      <ProjectCard
                      key={index}
                      {...project}
                      />
                    </motion.div>
                  )
                })
              }
            </Row>
          </Container>
    </section>
  )
}
