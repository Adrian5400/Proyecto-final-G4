import React from "react";
import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/home.css';
import { Contexto } from './../App';
import augusto from './../img/augusto.png';

function Home() {
  const { usuarioPagina } = useContext(Contexto);

  return (
<div className="mx-auto contenedor container min-vh-100 mt-4">
      
        
          <div className="col-md-12 col-lg-12 d-flex pt-4 text-center div">
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <div>
                <h1 className="mt-3 col-lg-12" style={{ color: "var(--color3)" }}>
                  CoRAzon Abierto
                </h1>
                <p className="col-lg-12" style={{ color: "var(--color4)" }}>
                  Bienvenido a la aplicación rompecorazones.
                </p>
                <p className="col-lg-12" style={{ color: "var(--color4)" }}>
                  Utiliza la barra de navegación para acceder a la base de datos de herramientas o para registrar tus credenciales y acceder a la zona de preparación de operaciones.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mt-4 d-flex justify-content-center align-items-center">
              <img src={augusto} alt="imagen" />
            </div>
          </div>
        
      
</div>
  );
}


export default Home;
