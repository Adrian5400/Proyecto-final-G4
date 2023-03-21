import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import Decodificador from "../components/Decodificador";


function Herramientas() {

  const [herramientas, setHerramientas] = useState([]);
  const [herramientasCompletas, setHerramientasCompletas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarError, setMostrarError] = useState(false);

  // Con esto, selecciono la herramienta que quiero mostrar en el modal
  const [herramientaSeleccionada, setHerramientaSeleccionada] = useState(null);

  const abrirModal = (herramienta) => {
    setHerramientaSeleccionada(herramienta);
    setMostrarModal(true);
    console.log(herramienta);
  };



  function handleInputChange(event) {
    setBusqueda(event.target.value);
  }

  function handleSearchClick() {
    const herramientasFiltradas = herramientas.filter((herramienta) => {
      return herramienta.nombre.toLowerCase().includes(busqueda.toLowerCase());
    });

    if(herramientasFiltradas.length === 0){
      setMostrarError(true);
    }
    setHerramientas(herramientasFiltradas);
  }

  function handleSelectChange(event) {
    const pasoSeleccionado = event.target.value;
    if (pasoSeleccionado === "Selecciona un paso") {
      setHerramientas(herramientasCompletas);
    } else {
      const herramientasFiltradas = herramientasCompletas.filter((herramienta) => {
        const pasosNumericos = herramienta.steps.split(",").map((paso) => Number(paso.trim()));
        return pasosNumericos.includes(Number(pasoSeleccionado));
      });
      setHerramientas(herramientasFiltradas);
    }
  }


  useEffect(() => {
    const fetchHerramientas = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/herramientas');
      const data = await response.json();
      setHerramientasCompletas(data);
      setHerramientas(data);
    };

    fetchHerramientas();
  }, []);

  useEffect(() => {
    setHerramientas(herramientasCompletas);
  }, [busqueda]);

  return (
    <div style={{ height: '85vh', overflowY: 'scroll' }}>
      <div className="container">
        <div style={{ backgroundColor: 'var(--color1)' }}>
          <h1 style={{ textAlign: 'center', paddingBottom: '0.5em', paddingTop: '0.5em', color: 'var(--color5)', fontFamily: 'Verdana, sans-serif' }}>Herramientas</h1>
        </div>
      </div>

      <div className='contenedor card p-4' style={{ backgroundColor: "#150f16" }}>
        <div className='row'>
          <input className='col-4 offset-1' type="text" placeholder='Introduce el nombre de la herramienta' value={busqueda} onChange={handleInputChange} style={{ fontFamily: 'Verdana, sans-serif' }} />
          <button className='btn btn-primary col-1 offset-1' onClick={handleSearchClick} style={{fontFamily: 'Monaco, monospace'}}>BUSCAR</button>
          <select className='col-3 offset-1' onChange={handleSelectChange} style={{fontFamily: 'Verdana, sans-serif'}}>
            <option>Selecciona un paso</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
          </select>
        </div>
        <div className='row offset-1 pb-5 p-5' style={{ justifyContent: 'center' }}>
          {herramientas.map((herramienta, index) => (
           <div key={herramienta.id} className='col-md-6 pb-5' style={{ margin: '0 auto' }}>
              <div id={herramienta.id} className="cuerpo card" style={{ width: '350px' }}>
                {herramienta.modelo ? (
                  <div style={{ width: '350px', height: '250px', display: 'flex' }}>
                    <Decodificador modelo={herramienta.modelo} className="Decodificador" />
                  </div>
                ) : (
                  <div style={{ width: '340px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={herramienta.image_url}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://www.hostingplus.com.es/wp-content/uploads/2020/02/error.jpg';
                      }}
                      className="imagen card-img-top"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt={herramienta.nombre}
                    />
                  </div>
                )}
                <div className="card-body">
                  <h4 className="card-title" style={{fontFamily: 'Verdana, sans-serif'}}>{herramienta.nombre}</h4>
                  <button
                    className="btn btn-primary"
                    //Aquí le pasas la herramienta a la función abrirModal del codigo de arriba
                    onClick={() => abrirModal(herramienta)} style={{fontFamily: 'Monaco, monospace'}}


                  >
                    VER DETALLES
                  </button>

                </div>
              </div>
            </div>
          ))}
          {/* Ver detalles lo cambié a un modal.
No tiene mucho misterio, le das click al ver detalles y te muestra el modal que coge los datos del herramientaSeleccionada. */}

          <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{fontFamily: 'Verdana, sans-serif'}}>{herramientaSeleccionada ? herramientaSeleccionada.nombre : ""}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {herramientaSeleccionada ? (
                <>
                  <p style={{fontFamily: 'Verdana, sans-serif'}}>{herramientaSeleccionada.desc}</p>
                  <p style={{fontFamily: 'Verdana, sans-serif'}}>Se encuentra en los pasos {herramientaSeleccionada.steps} de la operación</p>
                </>
              ) : (
                <p style={{fontFamily: 'Verdana, sans-serif'}}>No se han seleccionado herramientas</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setMostrarModal(false)} style={{fontFamily: 'Monaco, monospace'}}>
                CERRAR
              </Button>
            </Modal.Footer>
          </Modal>


          <Modal show={mostrarError} onHide={() => setMostrarError(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              {herramientaSeleccionada ? (
                <>
                  <p style={{fontFamily: 'Verdana, sans-serif'}}>{herramientaSeleccionada.desc}</p>
                  <p style={{fontFamily: 'Verdana, sans-serif'}}>Se encuentra en los pasos {herramientaSeleccionada.steps} de la operación</p>
                </>
              ) : (
                <h5 style={{fontFamily: 'Verdana, sans-serif'}}>La herramienta que has buscado no existe</h5>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setMostrarModal(false)} style={{fontFamily: 'Monaco, monospace'}}>
                CERRAR
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>

  )
}
export default Herramientas
