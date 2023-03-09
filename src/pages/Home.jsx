import React from "react";
import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/home.css';


import { Contexto } from './../App';
import augusto from './../img/augusto.png';

function Home() {
  const { usuarioPagina } = useContext(Contexto);

  return (
<div className="mx-auto contenedor container min-vh-100 ">
          <div className="col-md-12 col-lg-12 d-flex flex-sm-column flex-md-row pt-4 text-center div min-vh-100">
            <div className="col-sm-12 col-lg-6 col-md-6 d-flex flex-column justify-content-center mt-sm-5 ">
              
                <h1 className="col-lg-12 pb-md-3 mt-sm-5" style={{ color: "var(--color5)" }}>
                  CoRAzon Virtual
                </h1>
                <div className="pt-md-3">
                  <p className="col-lg-12" style={{ color: "var(--color5)" }}>
                    Bienvenido al simulador de Cateterismo (TAVR).
                  </p>
                  <p className="col-lg-12" style={{ color: "var(--color5)" }}>
                    Utiliza la barra de navegación para acceder a la base de datos de herramientas o para registrar tus credenciales y acceder a la zona de preparación de operaciones.
                  </p>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-4 d-flex justify-content-center align-items-center mt-sm-5">
              <img src={augusto} alt="imagen" />
            </div>
          </div>
</div>
  );
}


export default Home;
