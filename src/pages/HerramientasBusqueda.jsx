import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/herramientas.css';
import ModeloLoader from "../components/ModeloLoader";
import { Modal, Button } from "react-bootstrap";

function Herramientas() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [herramientas, setHerramientas] = useState([]);

// Con esto, selecciono la herramienta que quiero mostrar en el modal
  const [herramientaSeleccionada, setHerramientaSeleccionada] = useState(null);

  const abrirModal = (herramienta) => {
    setHerramientaSeleccionada(herramienta);
    setMostrarModal(true);
    console.log(herramienta);
  };

  const fetchHerramientas = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/herramientas');
      const data = await response.json();
      setHerramientas(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchHerramientas();
  }, []);






  const obtenerUrlDropbox = (herramienta) => {
    // Aquí coge la url del dropbox en el que subí los modelos 3d (.fbx) + el nombre
    return `https://dl.dropboxusercontent.com/s/50pgz20gs2fp0aj/${herramienta.nombre}.fbx`;
  };


  return herramientas.length === 0 ? (
    <p>Cargando...</p>
  ) : (
    <div className="mx-auto contenedor" style={{height: '85vh', overflowY: 'auto' }}>
    <div className="row offset-1 pb-5 p-5">
      {herramientas.map((herramienta, index) => {

        return (
          <div key={herramienta.id} className="col-md-6 pb-5">
            <div id={herramienta.id} className="cuerpo card">

              {/* Bueno, la movida que conte por Whatsapp. No voy a subir las 2h de intentos de Laravel de crear Middlewares, 
              tocar el Kernel.php, crear Headers en 44 ficheros... que me da cosa liarla y joder algo del back.
              Esto para mi sorpresa tira, compruebo con el if de aquí si acaba en .fbx, si acaba en .fbx hace la gitanada de 
              utilizar el ModeloLoader pasando la url desde Dropbox para evitar los problemas del CORS. */}


              {herramienta.image_url.endsWith(".fbx") ? (

                <ModeloLoader url={obtenerUrlDropbox(herramienta)} />

              ) : (
                <div>
                  <img
                    src={herramienta.image_url}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.hostingplus.com.es/wp-content/uploads/2020/02/error.jpg";
                    }}
                    className="imagen card-img-top offset-3"
                    alt=""
                  />
                  <div className="card-body">
                    <h4
                      className="card-title"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "var(--color4)",
                      }}
                    >
                      {herramienta.name}
                    </h4>

                    <p className="card-text">{herramienta.description}</p>
                    <button
                      className="btn btn-primary"
                      //Aquí le pasas la herramienta a la función abrirModal del codigo de arriba
                      onClick={() => abrirModal(herramienta)}


                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        );
      })}

      {/* Ver detalles lo cambié a un modal.
No tiene mucho misterio, le das click al ver detalles y te muestra el modal que coge los datos del herramientaSeleccionada. */}

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
    </div>
  );

}

export default Herramientas;