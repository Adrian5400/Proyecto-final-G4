import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { Modal } from "react-bootstrap";





const Herramientas = () => {

    const [DatosCartas, setDatosCartas] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [herramientaSeleccionada, setHerramientaSeleccionada] = useState(null);

    const abrirModal = (herramienta) => {
        setHerramientaSeleccionada(herramienta);
        setMostrarModal(true);
        console.log(herramienta);
      };

    useEffect(() => {

        const obtenerDatoCarta = async () => {
            const datos = await fetch('http://127.0.0.1:8000/api/herramientas');
            const cartas = await datos.json();
            setDatosCartas(cartas);
        };
        obtenerDatoCarta();
    }, []);

    console.log(DatosCartas);
    

    return (
        <div className="mx-auto contenedor" style={{height: '85vh', overflowY: 'auto' }}>
          <h1 className="pt-5" style={{textAlign: 'center', color: "var(--color5)"}}>Herramientas</h1>
          <Container>
          <Row xs={1} sm={2} lg={3} className="g-4">
              {DatosCartas.map((carta) => (
                <Col key={carta.id}>
                  <Card style={{ width: '20rem' }} className="my-3">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body style={{justifyContent: 'center'}}>
                    
                      <Card.Title>{carta.nombre}</Card.Title>
                      <Button onClick={() => abrirModal(carta)}>+ Detalles</Button>

                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{herramientaSeleccionada ? herramientaSeleccionada.nombre : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {herramientaSeleccionada ? (
            <>
              <p>{herramientaSeleccionada.desc}</p>
              <p>{herramientaSeleccionada.steps}</p>
            </>
          ) : (
            <p>No se han seleccionado herramientas</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      );
};

export default Herramientas;
