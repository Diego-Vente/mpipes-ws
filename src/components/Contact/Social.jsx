import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>ENCUENTRANOS EN</h1>
                <p>
                Porfavor no dude en escribirnos y <span className="yellow">conectarase.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://www.facebook.com/app.mobile.pipes"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://api.whatsapp.com/send?phone=51922502087"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiOutlineWhatsApp />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/mobilepipes/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social