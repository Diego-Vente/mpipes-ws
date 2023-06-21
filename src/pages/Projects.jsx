import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

import whatsappbot from "../assets/projects/whatsappbot.png";
import landingpage from "../assets/projects/landingpage.png";
import ecommerce from "../assets/projects/ecommerce.png";
import ciudadsegura from "../assets/projects/ciudadsegura.png";
import gestioncamiones from "../assets/projects/gestioncamiones.png";
import amazonbot from "../assets/projects/amazonbot.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Nuetros <strong className="yellow">Proyectos </strong>
        </h1>
        <p style={{ color: "black" }}>
        Aquí hay algunos proyectos en los que hemos trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Tienda E-commerce"
              description="La aplicación e-commerce es una plataforma completa para realizar compras en línea. Cuenta con tres aplicaciones diferentes: una para clientes, una para administradores y otra para gestores. Los clientes pueden explorar una amplia gama de productos y categorías, agregar productos al carrito de compras y realizar pagos seguros en línea. Además, la aplicación ofrece notificaciones en tiempo real sobre el estado de los pedidos, manteniendo a los usuarios informados en cada etapa del proceso. Para los administradores y gestores, la aplicación proporciona herramientas para cargar nuevos productos, administrar categorías y realizar un seguimiento eficiente de las transacciones. En resumen, la app e-commerce es una solución integral que brinda a los usuarios una experiencia de compra conveniente y segura."
              ghLink="https://api.whatsapp.com/send?phone=51922502087"
              demoLink="https://api.whatsapp.com/send?phone=51922502087"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsappbot}
              isBlog={false}
              title="Asistente IA (Whatsapp y ChatGPT)"
              description="El servicio de asistente IA combina la inteligencia artificial de ChatGPT con la popular plataforma de mensajería de WhatsApp. Esta integración permite a las empresas brindar un servicio de atención al cliente más humano y personalizado. El asistente IA puede responder consultas de los clientes, proporcionar información detallada sobre el negocio, tomar pedidos y ofrecer recomendaciones de productos. Su capacidad para generar respuestas más naturales y contextuales en las conversaciones ayuda a mejorar la experiencia del cliente y fortalecer la relación con la marca. Con el asistente IA en WhatsApp, las empresas pueden automatizar tareas repetitivas, reducir el tiempo de respuesta y ofrecer un servicio al cliente más eficiente y satisfactorio."
              ghLink="https://api.whatsapp.com/send?phone=51922502087"
              demoLink="https://api.whatsapp.com/send?phone=51922502087"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingpage}
              isBlog={false}
              title="Landing page"
              description="La landing page es una página web diseñada para proporcionar información relevante y atractiva sobre tu negocio. Es una herramienta efectiva para presentar tu empresa, productos o servicios de manera concisa y convincente. La landing page puede incluir detalles clave sobre el negocio, como su propósito, historia y valores. Además, puede resaltar productos o servicios destacados, mostrar testimonios de clientes satisfechos y proporcionar detalles de contacto para facilitar la comunicación. La página también puede contar con formularios de contacto o suscripción para captar clientes potenciales y permitirles obtener más información o recibir promociones. En resumen, una landing page bien diseñada y optimizada es una herramienta valiosa para atraer y convertir visitantes en clientes potenciales.."
              ghLink="https://api.whatsapp.com/send?phone=51922502087"
              demoLink="https://api.whatsapp.com/send?phone=51922502087"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ciudadsegura}
              isBlog={false}
              title="App reportes de seguridad ciudadana"
              description="La aplicación de reportes de seguridad ciudadana permite a los usuarios generar informes de posibles crímenes y actividades sospechosas en su zona, fomentando una comunidad más segura y colaborativa. La aplicación consta de dos versiones: una para ciudadanos y otra para administradores. Los ciudadanos pueden registrar incidentes, proporcionando detalles y descripciones relevantes. Los administradores, por su parte, revisan y gestionan los informes, tomando acciones adecuadas según su validez. La aplicación también ofrece gráficos estadísticos que muestran tendencias y patrones de seguridad en la zona, lo que ayuda a tomar medidas preventivas. En general, esta aplicación promueve la participación ciudadana y contribuye a la creación de entornos más seguros."
              ghLink="https://api.whatsapp.com/send?phone=51922502087"
              demoLink="https://api.whatsapp.com/send?phone=51922502087"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestioncamiones}
              isBlog={false}
              title="App monitoreo camiones"
              description="La aplicación de monitoreo de camiones es una solución integral para gestionar eficientemente las rutas de una empresa de transporte. Permite a los administradores planificar y asignar rutas óptimas para los camiones, teniendo en cuenta factores como la distancia, el tráfico y las entregas programadas. La aplicación ofrece seguimiento en tiempo real de la ubicación de los camiones mediante el uso de GPS, lo que permite una supervisión continua. Además, se generan informes detallados sobre el rendimiento de las rutas, incluyendo tiempos de entrega y eficiencia. Con esta aplicación, las empresas pueden optimizar sus operaciones de transporte, reducir costos y mejorar la satisfacción del cliente al garantizar entregas puntuales y eficientes"
              ghLink="https://api.whatsapp.com/send?phone=51922502087"
              demoLink="https://api.whatsapp.com/send?phone=51922502087"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonbot}
              isBlog={false}
              title="Bot Python Amazon"
              description="El bot Python Amazon es una herramienta automatizada que realiza búsquedas y compras en el popular sitio web de comercio electrónico Amazon.com. El bot inicia sesión en la plataforma y realiza búsquedas basadas en los criterios proporcionados por el usuario. Una vez que encuentra un producto relevante, agrega automáticamente el artículo al carrito de compras y procede a completar la compra utilizando la información de pago predefinida. Este bot ahorra tiempo y esfuerzo al automatizar el proceso de compra en Amazon, permitiendo a los usuarios encontrar y adquirir rápidamente el producto deseado según sus preferencias y necesidades."
              ghLink="https://api.whatsapp.com/send?phone=51922502087"
              demoLink="https://api.whatsapp.com/send?phone=51922502087"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects