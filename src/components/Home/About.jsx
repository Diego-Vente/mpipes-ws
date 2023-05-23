import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
            <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  ACERCA DE <span className="about-hl"> NOSOTROS </span>
                </h1>
                <p className="home-about-body">
                 Descubre <span className="about-hl">Mobile Pipes</span>, expertos en desarrollo de software que impulsan el crecimiento de tu negocio. Diseñamos apps móviles y páginas web que brindan experiencias <b className="about-hl">excepcionales</b>, para que tus clientes queden <b className="about-hl">encantados</b>. Nuestro enfoque se centra en construir soluciones <b className="about-hl">robustas, confiables y adaptadas a tus necesidades</b>. Además, creamos chatbots inteligentes y automatizamos tareas para mejorar la <b className="about-hl">eficiencia operativa</b>. Trabajamos contigo para asegurarnos de que tu presencia digital sea sólida y esté preparada para el futuro. Confía en nuestro equipo de expertos para llevar tu visión a la realidad y alcanzar el éxito. Contáctanos hoy mismo y descubre cómo Mobile Pipes puede transformar tu negocio.
                  <br />
            </p>
          </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>ENCUENTRANOS EN</h1>
                <p>
                Por favor, no dude en ponerse en contacto con nosotros y <span className="about-hl">conectarse.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About