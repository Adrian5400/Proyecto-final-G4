import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";


const equipo = [
  {
    nombre: "Juan I.",
    foto: "https://www.usnews.com/object/image/00000143-de1e-d45e-a37b-ffff416f0000/FE_DA_111219_Kim_Jong_Il_2.jpg?update-time=&size=responsiveFlow640",
    descripcion:
      "Le gustan largos paseos por la playa. Misántropo."
  },
  {
    nombre: "Guillermo",
    foto: "https://i.kym-cdn.com/photos/images/newsfeed/001/548/116/85d.jpg",
    descripcion:
      "Primer campeón de España de tiro con arco a caballo."
  },
  {
    nombre: "Adrián",
    foto: "https://elitesportsny.com/wp-content/uploads/2022/11/USATSI_15781196-scaled.jpg",
    descripcion:
      "Arquitecto del estadio de Maracaná."
  },
  {
    nombre: "Integrante 4",
    foto: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94907b77-b2d8-49b7-b288-44472c12db95/ddcsjf6-d7f2f555-0949-4ef5-869f-2dc8b54a2344.jpg/v1/fill/w_1024,h_1536,q_75,strp/the_trainer_and_their_vaporeon_by_naitsabes89_ddcsjf6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk0OTA3Yjc3LWIyZDgtNDliNy1iMjg4LTQ0NDcyYzEyZGI5NVwvZGRjc2pmNi1kN2YyZjU1NS0wOTQ5LTRlZjUtODY5Zi0yZGM4YjU0YTIzNDQuanBnIiwiaGVpZ2h0IjoiPD0xNTM2Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTQ5MDdiNzctYjJkOC00OWI3LWIyODgtNDQ0NzJjMTJkYjk1XC9uYWl0c2FiZXM4OS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.tHAtSRm7mjnP4z1FFme3H0b4Coy0AX_hM4DsdShN-aM",
    descripcion:
      "Filósofo, guerrero, oficial y caballero."
  },
  {
    nombre: "ChatGPT",
    foto: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    descripcion:
      "Tu colega. Tu amigo. Tu compañero."
  }
];

const Equipo = () => {
  return (
    <div className="mx-auto contenedor container min-vh-70 pt-4" >
    <h1 className="pt-5 mb-5 pb-5" style={{textAlign: 'center', color: "var(--color5)"}}>Equipo</h1>
      <Container style={{marginTop: "10vh"}}>
      <Row>
        {equipo.map((miembro) => (
          <Col key={miembro.nombre}>
            <Card className="my-3 col-xs-12">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Image src={miembro.foto} roundedCircle style={{height: "20vh", objectFit:"cover"}} className="mb-3" />
                <Card.Title style={{color: "var(--color3)"}}>{miembro.nombre}</Card.Title>
                <Card.Text className="text-center" style={{color: "var(--color3)"}}>{miembro.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
   

    <Row style={{marginTop: '2rem'}}>
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

    
    <Row style={{marginTop: '3rem'}}>
          <Container style={{
            backgroundColor: "var(--color1)", maxWidth: "100vw"}}>
        <div className="row">
            <div className="col-sm-12 text-center">
                <p className="mt-3 mb-5" style={{ color: "var(--color5)" }}>
Nuestro equipo está compuesto por individuos con antecedentes diversos y perspectivas únicas, lo que nos permite abordar los problemas desde diferentes ángulos y encontrar soluciones creativas. Creemos que la colaboración y la comunicación son esenciales para el éxito de cualquier proyecto, y nos aseguramos de mantener una comunicación constante entre nosotros para asegurarnos de que todos estamos en la misma página.


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
