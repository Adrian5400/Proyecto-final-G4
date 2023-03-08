import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";


const equipo = [
  {
    nombre: "Lorem",
    foto: "https://via.placeholder.com/150",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    nombre: "Lorem",
    foto: "https://via.placeholder.com/150",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    nombre: "Lorem",
    foto: "https://via.placeholder.com/150",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    nombre: "Lorem",
    foto: "https://via.placeholder.com/150",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  }
];

const Equipo = () => {
  return (
    <div className="mx-auto contenedor container min-vh-100 mt-5 pt-4">
    <h1 className="pt-5" style={{textAlign: 'center'}}>Equipo</h1>
      <Container>
      <Row>
        {equipo.map((miembro) => (
          <Col sm={12} md={3} key={miembro.nombre}>
            <Card className="my-3">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Image src={miembro.foto} roundedCircle className="mb-3" />
                <Card.Title>{miembro.nombre}</Card.Title>
                <Card.Text className="text-center">{miembro.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>

    <Row>
    
    </Row>

      

    </div>



  );
};

export default Equipo;
