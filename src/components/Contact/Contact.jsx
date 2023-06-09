import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      const subject = "Deseo consultar sus servicios de desarrollo!"
      const recipient = "mobile.pipes@gmail.com"
      const message = formData.message
      //const url = 'mailto:${toMail}?subject=${subject}&body=${formData.message}';
      const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

      try {
        window.open(url, '_blank')
      } catch (error) {
        console.error('Error opening URL: ', error);
      }
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 > Comunícate con</h1>
            <h1 className="yellow"> nosotros</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Nombre" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Mensaje" onChange={handleChange} />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                <Button type="submit" className="button" >Enviar</Button>
                <span className='done'>{done && "Gracias por contactarnos y esté seguro de que hemos recibido su correo."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact