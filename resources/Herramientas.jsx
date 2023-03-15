import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Herramientas.css';

function Herramientas() {

  const [detalles, setDetalles] = useState({});

  function mostrarDetalles(id, texto) {
    if (document.querySelector(`#mostrar${id}`).innerHTML == "Ocultar detalles") {
      setDetalles(prevState => ({
        ...prevState,
        [id]: ''
      }));
      document.querySelector(`#separador${id}`).className = "separador oculto";
      document.querySelector(`#mostrar${id}`).innerHTML = "Mostrar detalles";
    } else {
    setDetalles(prevState => ({
      ...prevState,
      [id]: texto
    }));
    document.querySelector(`#separador${id}`).className = "separador";
    document.querySelector(`#mostrar${id}`).innerHTML = "Ocultar detalles";
  }
  }

  return (
    <div>
    <h1 className='pb-3'>Herramientas</h1>
    <div className='contenedor card p-4'>
      <div className='row'>  
      <input className='col-4 offset-1' type="text" placeholder='Introduce el nombre de la herramienta' />
      <button className='btn btn-primary col-1 offset-1'>Buscar</button>
      <select className='col-3 offset-1'>
        <option>Selecciona un tipo</option>
        <option>Bisturi</option>
        <option>Aguja</option>
        <option>Pinzas</option>
        <option>Válvula</option>
      </select>
      </div>
      <div className='row offset-2 pb-5 pt-5'>
      <div id="uno" className="cuerpo card">
          <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
          <div className="card-body">
            <h4 className="card-title">{"Bisturi"}</h4>
            <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
            <p id="mostraruno" className="muestra" onClick={() => mostrarDetalles("uno", "Detalles: Hoja fina y afilada hecha de acero, pensada para abrir la piel entre 2 y 5cm de grosor y hasta 50cm de largo")}>Mostrar detalles</p>
          </div>
          <div id="separadoruno"></div>
          {detalles.uno && <h6>{detalles.uno}</h6>}
        </div>
        <div id="dos" className="cuerpo card offset-1">
          <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
          <div className="card-body">
            <h4 className="card-title">{"Bisturi"}</h4>
            <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
            <p id="mostrardos" className="muestra" onClick={() => mostrarDetalles("dos", "Detalles: Hoja fina y afilada hecha de acero, pensada para abrir la piel entre 2 y 5cm de grosor y hasta 50cm de largo")}>Mostrar detalles</p>
          </div>
          <div id="separadordos"></div>
          {detalles.dos && <h6>{detalles.dos}</h6>}
        </div>
    </div>
    <div className='row offset-2 pb-5'>
    <div id="tres" className="cuerpo card">
          <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
          <div className="card-body">
            <h4 className="card-title">{"Bisturi"}</h4>
            <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
            <p id="mostrartres" className="muestra" onClick={() => mostrarDetalles("tres", "Detalles: Hoja fina y afilada hecha de acero, pensada para abrir la piel entre 2 y 5cm de grosor y hasta 50cm de largo")}>Mostrar detalles</p>
          </div>
          <div id="separadortres"></div>
          {detalles.tres && <h6>{detalles.tres}</h6>}
        </div>
        <div id="cuatro" className="cuerpo card offset-1">
          <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
          <div className="card-body">
            <h4 className="card-title">{"Bisturi"}</h4>
            <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
            <p id="mostrarcuatro" className="muestra" onClick={() => mostrarDetalles("cuatro", "Detalles: Hoja fina y afilada hecha de acero, pensada para abrir la piel entre 2 y 5cm de grosor y hasta 50cm de largo")}>Mostrar detalles</p>
          </div>
          <div id="separadorcuatro"></div>
          {detalles.cuatro && <h6>{detalles.cuatro}</h6>}
        </div>
      </div>
      <div className='row offset-2 pb-5'>
      <div id="cinco" className="cuerpo card">
          <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
          <div className="card-body">
            <h4 className="card-title">{"Bisturi"}</h4>
            <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
            <p id="mostrarcinco" className="muestra" onClick={() => mostrarDetalles("cinco", "Detalles: Hoja fina y afilada hecha de acero, pensada para abrir la piel entre 2 y 5cm de grosor y hasta 50cm de largo")}>Mostrar detalles</p>
          </div>
          <div id="separadorcinco"></div>
          {detalles.cinco && <h6>{detalles.cinco}</h6>}
        </div>
        <div id="seis" className="cuerpo card offset-1">
          <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
          <div className="card-body">
            <h4 className="card-title">{"Bisturi"}</h4>
            <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
            <p id="mostrarseis" className="muestra" onClick={() => mostrarDetalles("seis", "Detalles: Hoja fina y afilada hecha de acero, pensada para abrir la piel entre 2 y 5cm de grosor y hasta 50cm de largo")}>Mostrar detalles</p>
          </div>
          <div id="separadorseis"></div>
          {detalles.seis && <h6>{detalles.seis}</h6>}
        </div>
    </div>
    </div>
    </div>
  )
}

export default Herramientas
