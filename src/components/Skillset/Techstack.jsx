import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiGithub,SiMongodb,SiHtml5,SiAndroid,SiPython,SiDjango,SiFlask,SiFirebase,SiAmazonaws,
  SiFlutter,SiCsharp
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div id="tooltip">
            <span id="tooltipText">Utilizado en el 90% de todos los sitios web.
            <br></br>Utilizado en: Google, Facebook, Twitter, YouTube, Netflix, Amazon, etc</span>  
          </div>
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">12 millones de desarrolladores activos. 
            <br></br>Utilizado en: Google Chrome, Mozilla Firefox, etc.</span>
          </div>
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">1,1 millones de proyectos activos. 
            <br></br>Utilizado en: Uber, Netflix, PayPal, eBay, etc.</span>
          </div>
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">1 millón de desarrolladores activos. 
            <br></br>Utilizado en: Facebook, Instagram, etc.</span>
          </div>
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">100.000 desarrolladores activos.
            <br></br>Utilizado en: Facebook, eBay, Uber, etc.</span>
          </div>
        <SiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">28 millones de usuarios. 
            <br></br>Utilizado en: GitHub, Bitbucket, Gitlab, etc.</span></div>
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">2.500 millones de dispositivos activos.</span></div>
        <SiAndroid />
        
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">26 millones de desarrolladores activos. 
            <br></br>Utilizado en: YouTube, Instagram, Spotify, etc.</span></div>
        <SiPython /> 
        
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">100.000 desarrolladores activos. 
            <br></br>Utilizado en: Instagram, Spotify, etc.</span></div>
        <SiDjango />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">50.000 desarrolladores activos. 
            <br></br>Utilizado en: Pinterest, Reddit, etc.</span></div>
        <SiFlask />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">10 millones de usuarios activos. 
            <br></br>Utilizado en: Airbnb, Lyft, Uber, etc.</span></div>
        <SiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">1 millón de usuarios activos, 
            <br></br>Utilizado en: Amazon, Netflix, Spotify, etc.</span></div>
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">2 millones de desarrolladores activos. 
            <br></br>Utilizado en: Google, Alibaba, etc.</span></div>
        <SiFlutter />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">10 millones de desarrolladores activos.
            <br></br>Utilizado en: Microsoft Windows, Adobe Photoshop, etc.</span></div>
        <SiCsharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
      <span id="tooltipText">28 millones de usuarios.
            <br></br>Utilizado en: GitHub, Bitbucket, Gitlab, etc.</span></div>
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Techstack;
