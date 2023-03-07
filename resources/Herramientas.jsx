import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Herramientas.css';

function Herramientas() {
  return (
    <div>
    <h1 className='pb-3'>Herramientas</h1>
    <div className='contenedor card p-4'>
      <div className='row'>  
      <input className='col-4 offset-1' type="text" placeholder='Introduce el nombre de la herramienta' />
      <button className='btn btn-primary col-1 offset-1'>Buscar</button>
      <select className='col-3 offset-1'>
        <option selected>Selecciona un tipo</option>
        <option>Bisturi</option>
        <option>Aguja</option>
        <option>Pinzas</option>
        <option>Jeringuilla</option>
      </select>
      </div>
      <div className='row offset-2 pb-5 pt-5'>
    <div className="cuerpo card">
      <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
      <div className="card-body">
        <h5 className="card-title">{"Bisturi"}</h5>
        <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
      </div>
    </div>
    <div className="cuerpo card offset-1">
      <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
      <div className="card-body">
        <h5 className="card-title">{"Bisturi"}</h5>
        <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
      </div>
      </div>
    </div>
    <div className='row offset-2 pb-5'>
    <div className="cuerpo card">
      <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
      <div className="card-body">
        <h5 className="card-title">{"Bisturi"}</h5>
        <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
      </div>
      </div>
      <div className="cuerpo card offset-1">
      <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
      <div className="card-body">
        <h5 className="card-title">{"Bisturi"}</h5>
        <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
      </div>
      </div>
      </div>
      <div className='row offset-2 pb-5'>
    <div className="cuerpo card">
      <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
      <div className="card-body">
        <h5 className="card-title">{"Bisturi"}</h5>
        <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
      </div>
    </div>
    <div className="cuerpo card offset-1">
      <img src={"https://www.bontempi.es/790-large_default/hoja-de-bisturi-del-15.jpg"} className="imagen card-img-top offset-3"/>
      <div className="card-body">
        <h5 className="card-title">{"Bisturi"}</h5>
        <p className="card-text">{"Se utiliza para hacer cortes limpios y acceder al interior del cuerpo"}</p>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Herramientas
