import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/growth.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp
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
                <p>
                Por favor, no dude en ponerse en contacto con nosotros y <span className="about-hl">conectarse.</span>
                </p>
                <h1>ENCUENTRANOS EN</h1>
              
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://www.facebook.com/app.mobile.pipes"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="facebook"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://api.whatsapp.com/send?phone=51922502087"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="whatsapp"
                    >
                      <AiOutlineWhatsApp />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/mobilepipes/"
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