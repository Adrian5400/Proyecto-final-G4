import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import "./css/pasos.css";

function ZonaPasos({ tarjetas }) {
  const [pasoActual, setPaso] = React.useState(0);
  const [pasos, setPasos] = useState([]);
  const [herramientas, setHerramientas] = useState([]);
  const [herramientaActual, setHerramientaActual] = useState(null);



  useEffect(() => {
    async function getPasos() {
      let lista = await fetch('http://127.0.0.1:8000/api/pasos');
      let listaJson = await lista.json();
      setPasos(listaJson);
    }
    getPasos();
  }, []);


  
  useEffect(() => {
    async function getHerramientas() {
      let listaH = await fetch('http://127.0.0.1:8000/api/herramientas');
      let listaHJson = await listaH.json();
      setHerramientas(listaHJson);
    }
    getHerramientas();
  }, []);

 

  useEffect(() => {
    const herramienta = herramientas.find(h => h.steps.includes(pasoActual));
    setHerramientaActual(herramienta);
  }, [pasoActual, herramientas]);
   
 
  
  
  const Siguiente = () => {
    setPaso(pasoActual + 1);
  }

  const Atras = () => {
    setPaso(pasoActual - 1);
  }



  return (
    
    <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', marginTop: '2em' }}>
      <Box sx={{ width: '50%', mr: 2 }}>
        <Stepper activeStep={pasoActual} orientation="vertical">
          {pasos.map((paso, index) => (
            <Step key={paso.id}>
              <StepLabel sx={{ color: 'var(--color4)'}}>{paso.titulo}</StepLabel>
              <StepContent>
                <Typography sx={{color: 'var(--color4)'}}>{paso.desc}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={Atras}
                      sx={{ mt: 1, mr: 1 }}
                      style={{ backgroundColor: 'var(--color5)', color: 'var(--color1)' }}
                    >
                      Atrás
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ mt: 1, mr: 1 }}
                      onClick={Siguiente}
                      style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)' }}
                    >
                      {index === pasos.length - 1 ? 'Terminar' : 'Siguiente'}
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ width: '50%' }}>
      <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
          <div className='row'>
            <div className='col-md-6'>
              <img src={herramientaActual ? herramientaActual.image_url : ''} alt={herramientaActual ? herramientaActual.nombre : ''} border="0" />
            </div>
            <div className='col-md-6'>
              <h1>Paso {pasoActual + 1}</h1>
              <h3>{herramientaActual ? herramientaActual.nombre : ''}</h3>
              <p>{herramientaActual ? herramientaActual.desc : ''}</p>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );


}

export default ZonaPasos;
