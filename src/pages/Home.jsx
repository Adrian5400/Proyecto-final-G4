import React from "react";
import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/home.css';
import { Contexto } from './../App';


function Home() {
  const { usuarioPagina } = useContext(Contexto);

  return (
<div className="mx-auto contenedor container min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4 text-center">
            <h1 className="mt-3" style={{ color: "var(--color3)" }}>
              CoRAzon Abierto
            </h1>
            <p style={{ color: "var(--color4)" }}>
              Bienvenido a la aplicación rompecorazones.
            </p>
             <p style={{ color: "var(--color4)" }}>
              Utiliza la barra de navegación para acceder a la base de datos de herramientas o para registrar tus credenciales y acceder a la zona de preparación de operaciones.
            </p>
            <div className="col-md-12 mt-4">
              <img src="http://via.placeholder.com/800x685" alt="imagen" />
            </div>
          </div>
        </div>
      </div>
   

</div>
  );
}


export default Home;
