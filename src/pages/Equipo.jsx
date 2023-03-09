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
  },
  {
    nombre: "ChatGPT",
    foto: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  }
];

const Equipo = () => {
  return (
    <div className="mx-auto contenedor container min-vh-100 mt-5 pt-4">
    <h1 className="pt-5" style={{textAlign: 'center', color: "var(--color5)"}}>Equipo</h1>
      <Container>
      <Row>
        {equipo.map((miembro) => (
          <Col key={miembro.nombre}>
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
   

    <Row style={{marginTop: '2rem'}}>
          <Container style={{ backgroundColor: "var(--color1)", maxWidth: "100vw"}}>
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="mt-3" style={{ color: "var(--color5)" }}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic deleniti assumenda quod unde, asperiores tempore corrupti illum porro accusantium autem voluptas magni mollitia voluptatum voluptates minima non aspernatur. Asperiores!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio optio saepe at laborum labore placeat, possimus libero. Illum modi harum laborum, similique dolorum tenetur vel laboriosam vitae corporis ipsam?
                </p>
            </div>
            </div>
          </Container>
    </Row>

    
    <Row style={{marginTop: '3rem'}}>
          <Container style={{ backgroundColor: "var(--color1)", maxWidth: "100vw"}}>
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="mt-3" style={{ color: "var(--color5)" }}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic deleniti assumenda quod unde, asperiores tempore corrupti illum porro accusantium autem voluptas magni mollitia voluptatum voluptates minima non aspernatur. Asperiores!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio optio saepe at laborum labore placeat, possimus libero. Illum modi harum laborum, similique dolorum tenetur vel laboriosam vitae corporis ipsam?
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
