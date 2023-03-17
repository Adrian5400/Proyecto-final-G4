import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Herramientas.css';

function Herramientas() {

  const [herramientas, setHerramientas] = useState([]);
  const [detalles, setDetalles] = useState({});

  function mostrarDetalles(id, texto) {
    setDetalles(prevState => {
      const newDetalles = { ...prevState };
      if (newDetalles[id]) {
        delete newDetalles[id];
      } else {
        newDetalles[id] = texto;
      }
      return newDetalles;
    });
    if (document.querySelector(`#mostrar${id}`).innerHTML == "Ocultar detalles") {
      setDetalles(prevState => ({
        ...prevState,
        [id]: ''
      }));
      document.querySelector(`#separador${id}`).className = "";
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

  function mostrarApi() {

      const fetchHerramientas = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/herramientas');
      const data = await response.json();
      setHerramientas(data);
      
    }

    useEffect(() => {
      fetchHerramientas();
  }, []);

  }

  return (
    <div>
    <h1 className='pb-3'>Herramientas</h1>
    <div className='contenedor card p-4'>
      <div className='row'>  
      <input className='col-4 offset-1' type="text" placeholder='Introduce el nombre de la herramienta' />
      <button className='btn btn-primary col-1 offset-1'>Buscar</button>
      <select className='col-3 offset-1'>
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
      {mostrarApi()}
      <div className='row offset-1 pb-5 p-5'>
  {herramientas.map((herramienta, index) => (
    <div key={herramienta.id} className='col-md-6 pb-5'>
      <div id={herramienta.id} className="cuerpo card">
        <img src={herramienta.image_url} onError={(e) => { e.target.onerror = null; e.target.src = "https://www.hostingplus.com.es/wp-content/uploads/2020/02/error.jpg" }} className="imagen card-img-top offset-3"></img>
        <div className="card-body">
          <h4 className="card-title">{herramienta.nombre}</h4>
          <p className="card-text">Pasos en los que se usa: {herramienta.steps}</p>
          <p id={`mostrar${herramienta.id}`} className="muestra" onClick={() => mostrarDetalles(`${herramienta.id}`, `${herramienta.desc}`)}>Mostrar detalles</p>
        </div>
        <div id={`separador${herramienta.id}`}></div>
        {detalles[herramienta.id] && <h6>{detalles[herramienta.id]}</h6>}
      </div>
      {index % 2 !== herramientas.length - 1 && <div className="w-100"></div>}
    </div>
  ))}
    </div>
    </div>
    </div>
  )
}

export default Herramientas