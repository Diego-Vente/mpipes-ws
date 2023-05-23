import React , { useState }from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,SiAndroidstudio,SiPycharm
} from "react-icons/si";


const Toolstack = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" >
        <div id="tooltip">
        <span id="tooltipText">1,5 millones de proyectos activos.
            <br></br>Utilizado en: GitHub, Bitbucket, Gitlab, etc.</span>  
        </div>
        <SiVisualstudiocode />
        
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">10 millones de usuarios activos.
            <br></br>Utilizado en: Google, Facebook, Twitter, etc.</span>  
          </div>
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">1 millón de usuarios activos.
            <br></br>GitHub, Bitbucket, Gitlab, etc.</span>  
          </div>
        <SiNetlify />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">4 millones de usuarios activos.
            <br></br>Utilizado en: Google, JetBrains, etc.</span>  
          </div>
        <SiAndroidstudio />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">2 millones de usuarios activos.
            <br></br>Utilizado en: JetBrains, etc.</span>  
          </div>
        <SiPycharm />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div id="tooltip">
            <span id="tooltipText">1 millón de usuarios activos.
            <br></br>Utilizado en: GitHub, Bitbucket, Gitlab, etc.</span>  
          </div>
        <SiHeroku />
      </Col>

    </Row>
  );
}

export default Toolstack;
