import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/home.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import { Contexto } from './../App';
import revilla from './../img/revilla.jpg';
import paciente from './../img/paciente.jpg';
import paciente2 from './../img/paciente2.jpg';


function Home() {



  const { usuarioPagina } = useContext(Contexto);

  const navigate = useNavigate();

  const [imagenPosicion, setImagenPosicion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenPosicion((prevIndex) => (prevIndex + 1) % 3);
      const imagenesContenedor = document.querySelector(".imagenes-container");
      imagenesContenedor.children[0].classList.add("imagen-salida");
      setTimeout(() => {
        imagenesContenedor.children[0].classList.remove("imagen-salida");
        imagenesContenedor.children[0].classList.add("imagen-entrada");
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);




  const imagenes = [paciente2, paciente, revilla];

  return (
    <div className="mx-auto contenedor container" style={{ backgroundColor: 'var(--color2)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="row">
        <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "var(--color1)", padding: '4rem', maxHeight: '60vh'}}>
          <h1 className="pb-md-3" style={{ color: "var(--color5)", fontSize: "3rem", marginBottom: '1rem', fontFamily: 'Verdana, sans-serif' }}>
            CoRAzon Virtual
          </h1>
          <p className="" style={{ color: "var(--color5)", fontSize: "1.2rem", lineHeight: '1.5', marginBottom: '1rem', fontFamily: 'Verdana, sans-serif' }}>
            Bienvenido al simulador de Cateterismo (TAVR).
          </p>
          <p className="" style={{ color: "var(--color5)", fontSize: "1.2rem", lineHeight: '1.5', fontFamily: 'Verdana, sans-serif' }}>
            Utiliza la barra de navegación para acceder a la base de datos de herramientas o para registrar tus credenciales y acceder a la zona de preparación de operaciones.
          </p>
          <Button
            variant='contained'
            color='primary'
            onClick={() => navigate('/register')}
            style={{ backgroundColor: "var(--color3)", color: '#fff', width: '20rem', height: '4rem', alignSelf: 'center', marginTop: '2rem', marginBottom: '2rem', borderRadius: '5px', fontSize: '1rem', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
          >
            Registrate
          </Button>
        </div>
        <div className="col-md-6 mt-xs-5 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--color1)", maxHeight: '60vh', marginRight: '0' }}>
          <img
            src={imagenes[imagenPosicion]}
            alt="imagen"
            className="imagen"
            style={{ maxWidth: '100%', marginLeft: window.innerWidth > 576 && window.innerWidth < 768 ? '3rem' : '1.2rem', maxHeight: '60vh', height: window.innerWidth < 576 ? '30vh' : '70vh', width: window.innerWidth >= 768 && window.innerWidth < 992 ? '60vh' : '100%' }}
          />
        </div>
      </div>
    </div>
  );


}




export default Home;
