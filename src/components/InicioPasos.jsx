import React, { useState, useEffect, createContext, useContext } from 'react';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ZonaPasos from './BarraPasos';
export const ContextoHerramientas = createContext();

function Inicio() {
  const [mostrarPasos, setMostrarPasos] = useState(false);
  const [tarjetas, setTarjetas] = useState([]);
const placeholderImage = 'https://www.shutterstock.com/shutterstock/photos/2032808081/display_1500/stock-photo-portrait-of-a-female-pirate-mercenary-standing-on-the-deck-of-her-ship-armed-and-ready-for-battle-2032808081.jpg'
  const handleSiguienteClick = () => {
    setMostrarPasos(true);
  };
 

  useEffect(() => {
    async function getHerramientas() {
      let lista = await fetch('http://127.0.0.1:8000/api/herramientas');
      let listaJson = await lista.json();
      setTarjetas(listaJson);
    }
    getHerramientas();
  }, []);



  function Tarjeta(props) {
    const { nombre, desc, image_url, steps  } = props;

    return (
      <Card sx={{ width: '15em' }}>
        <CardMedia component='img' image={image_url} alt={nombre} onError={(e) => { e.target.onerror = null; e.target.src=placeholderImage}}   />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {nombre}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {desc}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Se encuentra en los pasos: {steps}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  function FilaTarjetas(props) {
    const { tarjetas } = props;

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tarjetas.map((tarjeta, index) => (
          <div key={index} style={{ flexBasis: '25%', padding: '10px' }}>
            <Tarjeta {...tarjeta} />
          </div>
        ))}
      </div>
    );
  }


  return (
        <ContextoHerramientas.Provider value={{
      tarjetas
    }}>
    <div style={{ backgroundColor: 'var(--color2)', height: '85vh', overflowY: 'scroll' }} >
      {!mostrarPasos && (
        <div>
          <h1 style={{ color: 'var(--color5)', textAlign: 'center', marginTop: '3rem' }}>¿Dispones de estas herramientas a mano?</h1>
          <FilaTarjetas tarjetas={tarjetas.slice(0, 4)} />
          <FilaTarjetas tarjetas={tarjetas.slice(4)} />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '3rem' }}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSiguienteClick}
              style={{ backgroundColor: 'var(--color3)' }}
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
        {mostrarPasos && <ZonaPasos tarjetas={tarjetas} />}
      </div>
      </ContextoHerramientas.Provider>
  );
}


export default Inicio;
