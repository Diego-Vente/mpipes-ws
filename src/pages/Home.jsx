import {React, Linking} from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from '../assets/agile-dark.png';
//import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {

  let navigate = useNavigate(); 
  const goToProjects = () =>{ 
    let path = `project`; 
    navigate(path);
  }
  
  const goToWsp = async () => {
    const url = 'https://api.whatsapp.com/send?phone=51922502087';

    try {
      window.open(url, '_blank')
    } catch (error) {
      console.error('Error opening URL: ', error);
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Hagamos crecer tu negocio{" "}
{/*                 <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
              Hagamos <strong className="main-name"> crecer tu negocio </strong> 
              Con las soluciones tecnológicas altamente efectivas de Mobile Pipes, optimizarás tus procesos,
                 <strong className="main-name"> reducirás costos </strong>  
                 y te liberarás de tareas <strong className="main-name">repetitivas.</strong> 
              </h1>

{/*               <h1 className="heading-name">
              ¿Necesitas <strong className="main-name"> optimizar </strong> 
               procesos,
               <strong className="main-name"> reducir costos </strong> 
                 y dejar tareas 
                 <strong className="main-name"> repetitivas </strong>  
                 para expandirte? Descubre cómo Mobile Pipes puede brindarte soluciones tecnológicas efectivas.
              </h1> */}

              <div className="heading-name-btns-container" style={{ marginTop: 20 }}>
                <Button className="heading-name-btns" onClick={goToWsp}>
                  Cotiza gratis
                </Button>{' '}
                <Button className="btn-secondary"  onClick={goToProjects}>
                  Ver trabajos
                </Button>
              </div>  

{/*               <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>
{
            <Col className="img-main-screen" md={7} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                
              />
            </Col>}
          </Row>
        </Container>

      </Container>

      <About />
      
    </section>
  );
}

export default Home;