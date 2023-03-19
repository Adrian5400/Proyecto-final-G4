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
                Nosotros, el equipo de desarrolladores junior de la clase de segundo de Grado Superior de Desarrollo de Aplicaciones Web del I.E.S. Monte Naranco, nos acercamos humildemente a ustedes, estimados miembros del I.E.S. Augusto González de Linares, con gran honor y privilegio mientras emprendemos nuestra misión de crear una aplicación innovadora y sofisticada. Entendemos la inmensa responsabilidad que conlleva tal tarea, y estamos ansiosos por enfrentarnos a tamaño desafío.
                </p>
                <p className="mt-3" style={{ color: "var(--color5)" }}>
                Como equipo, hemos emprendido este viaje con el mayor compromiso y dedicación para entregar un producto de la más alta calidad. Entendemos que nuestro proyecto puede parecer ligeramente fuera de nuestro nivel de experiencia actual, pero les aseguramos que estamos a la altura de la tarea. Con su orientación y apoyo, estamos seguros de que podemos superar cualquier desafío que se presente en nuestro camino. Prometemos trabajar incansablemente y diligentemente para garantizar que nuestra aplicación cumpla con todos los requisitos técnicos y supere todas las expectativas. Les agradecemos la oportunidad de emprender este proyecto, y les prometemos hacer todo lo posible para entregar un resultado exitoso.
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
