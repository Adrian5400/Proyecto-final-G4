import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";


const equipo = [
  {
    nombre: "Juan I.",
    foto: "https://www.comunidad.madrid/sites/default/files/styles/image_style_16_9/public/img/profesiones/shutterstock_1683869425.jpg?itok=RVoaQ40b",
    descripcion:
      "Le gustan largos paseos por la playa. Muy largos."
  },
  {
    nombre: "Guillermo",
    foto: "https://media.gq.com.mx/photos/619696149d62ea68964f25ba/16:9/w_2560%2Cc_limit/new-work-kolumne-business-karriere-ueberqualifiziert-aufm.jpg",
    descripcion:
      "Primer campeón de España de tiro con arco a caballo."
  },
  {
    nombre: "Adrián",
    foto: "https://us.123rf.com/450wm/gstockstudio/gstockstudio1602/gstockstudio160200008/51617762-ocupado-trabajando-j%C3%B3venes-gafas-que-desgastan-del-hombre-guapo-pensativo-que-trabaja-en-la.jpg",
    descripcion:
      "Arquitecto del estadio de Maracaná."
  },
  {
    nombre: "Integrante 4",
    foto: "https://www.euroresidentes.com/estilo-de-vida/sentir-bien/wp-content/uploads/sites/7/2016/05/evita-personas-toxicas-trabajo-euroresidentes.jpg",
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
    <div className="mx-auto contenedor container min-vh-100 mt-5 pt-4">
    <h1 className="pt-5" style={{textAlign: 'center', color: "var(--color5)"}}>Equipo</h1>
      <Container>
      <Row>
        {equipo.map((miembro) => (
          <Col key={miembro.nombre}>
            <Card className="my-3">
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
            <div className="col-md-12 text-center">
                <p className="mt-3" style={{ color: "var(--color5)" }}>
                      ¡Conozca a nuestro equipo de cuatro programadores en formación! Somos apasionados por la codificación y siempre estamos ansiosos por aprender cosas nuevas. Juntos, estamos trabajando en la creación de una aplicación que creemos tiene un gran potencial, aunque es posible que no tenga un gran éxito. A pesar de esto, estamos decididos a utilizar este proyecto como una oportunidad para mejorar nuestras habilidades y adquirir una valiosa experiencia en equipo.
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
