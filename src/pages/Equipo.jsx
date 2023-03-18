import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./css/ocultarBarra.css";


const equipo = [
  {
    nombre: "Laravel",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
    descripcion:
      "Laravel 9 es nuestro backend."
  },
  {
    nombre: "React",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    descripcion:
      "React 18 es nuestro frontend."
  },

];

const Equipo = () => {
  return (
    <div className="mx-auto contenedor container pt-3" >
      <h1 className="pt-2 mb-1 pb-1" style={{ textAlign: 'center', color: "var(--color5)" }}>Curso de DAW 2ªA IES Monte Naranco</h1>
          <h2 className="pt-2 mb-1 pb-1" style={{textAlign: 'center', color: "var(--color5)"}}>Tecnologías Usadas</h2>

      <Container >
      <Row>
        {equipo.map((miembro) => (
          <Col key={miembro.nombre}>
            <Card className="my-3 col-xs-12">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Image src={miembro.foto} style={{height: "30vh", width: "20vh", objectFit:"contain"}} className="mb-3" />
                <Card.Title style={{color: "var(--color3)"}}>{miembro.nombre}</Card.Title>
                <Card.Text className="text-center" style={{color: "var(--color3)"}}>{miembro.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
   

    <Row style={{marginTop: '1rem',marginBottom: '1rem'}}>
          <Container style={{ backgroundColor: "var(--color1)", maxWidth: "100vw"}}>
        <div className="row">
            <div className="col-sm-12 text-center">
                <p className="mt-3" style={{ color: "var(--color5)" }}>
                      ¡Conozca a nuestro equipo de cuatro programadores en formación! Somos apasionados por la codificación y siempre estamos ansiosos por aprender cosas nuevas. Juntos, estamos trabajando en la creación de una aplicación que creemos tiene un gran potencial, aunque es posible que no tenga un gran éxito. A pesar de esto, estamos decididos a utilizar este proyecto como una oportunidad para mejorar nuestras habilidades y adquirir una valiosa experiencia en equipo.
                </p>
            </div>
            </div>
          </Container>
    </Row>

    
    
    </Container>
    </div>



  );
};

export default Equipo;
