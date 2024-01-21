import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { SkillCard } from "./SkillCard";
import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import css from "../assets/img/css.png";
import framer from "../assets/img/framer.png";
import html from "../assets/img/html.png";
import js from "../assets/img/js.png";
import mysql from "../assets/img/mysql.png";
import node from "../assets/img/node.png";
import vercel from "../assets/img/vercel.svg";
import arduino from "../assets/img/ardruino.png";
import c from "../assets/img/C.png";
import django from "../assets/img/django.png";
import github from "../assets/img/github.png";
import linux from "../assets/img/linux.png";
import numpy from "../assets/img/numpy.png";
import pandas from "../assets/img/pandas.png";
import pytorch from "../assets/img/pytorch.png";
import react from "../assets/img/react.png";
import selenium from "../assets/img/selenium.png";

import { motion } from "framer-motion";


export const Skills = () => {

  const skills = [
    {
      id: 1,
      title: "Python",
      imgUrl: python,
    },
    {
      id: 2,
      title: "Java",
      imgUrl: java,
    },
    {
      id: 3,
      title: "C",
      imgUrl: c,
    },
    {
      id: 4,
      title: "Linux",
      imgUrl: linux,
    },
    {
      id: 5,
      title: "HTML",
      imgUrl: html,
    },
    {
      id: 6,
      title: "CSS",
      imgUrl: css,
    },
    {
      id: 7,
      title: "React",
      imgUrl: react,
    },
    {
      id: 8,
      title: "Node.js",
      imgUrl: node,
    },
    {
      id: 9,
      title: "Framer Motion",
      imgUrl: framer,
    },
    {
      id: 10,
      title: "NumPy",
      imgUrl: numpy,
    },
    {
      id: 11,
      title: "Django",
      imgUrl: django,
    },
    {
      id: 12,
      title: "JavaScript",
      imgUrl: js,
    },
    {
      id: 13,
      title: "MySQL",
      imgUrl: mysql,
    },
    {
      id: 14,
      title: "Pandas",
      imgUrl: pandas,
    },
    {
      id: 15,
      title: "PyTorch",
      imgUrl: pytorch,
    },
    {
      id: 16,
      title: "Selenium Webdriver",
      imgUrl: selenium,
    },
    {
      id: 17,
      title: "Vercel",
      imgUrl: vercel,
    },
    {
      id: 18,
      title: "Ardruino",
      imgUrl: arduino,
    },
    {
      id: 19,
      title: "Git",
      imgUrl: github,
    },
  ];

  return (
    <section className="skill" id="skills">
          <h2>Skills</h2>
          <Container fluid>
            <Row xs={2} md={4} lg={6}>
              {
                skills.map((skill, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.2 }}
                    >
                      <SkillCard
                      key={index}
                      {...skill}
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
