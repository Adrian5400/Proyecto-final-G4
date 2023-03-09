import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ZonaPasos from './BarraPasos';

function Inicio() {
  const [mostrarPasos, setMostrarPasos] = useState(false);

  const handleSiguienteClick = () => {
    setMostrarPasos(true);
  };

  const tarjetas = [
    {
      titulo: 'Tarjeta 1',
      descripcion: 'Descripción de la tarjeta 1',
      imagen: 'https://via.placeholder.com/200',
    },
    {
      titulo: 'Tarjeta 2',
      descripcion: 'Descripción de la tarjeta 2',
      imagen: 'https://via.placeholder.com/200',
    },
    {
      titulo: 'Tarjeta 3',
      descripcion: 'Descripción de la tarjeta 3',
      imagen: 'https://via.placeholder.com/200',
    },
    {
      titulo: 'Tarjeta 4',
      descripcion: 'Descripción de la tarjeta 4',
      imagen: 'https://via.placeholder.com/200',
    },
    {
      titulo: 'Tarjeta 5',
      descripcion: 'Descripción de la tarjeta 5',
      imagen: 'https://via.placeholder.com/200',
    },
    {
      titulo: 'Tarjeta 6',
      descripcion: 'Descripción de la tarjeta 6',
      imagen: 'https://via.placeholder.com/200',
    },
    {
      titulo: 'Tarjeta 7',
      descripcion: 'Descripción de la tarjeta 7',
      imagen: 'https://via.placeholder.com/200',
    },
    {
      titulo: 'Tarjeta 8',
      descripcion: 'Descripción de la tarjeta 8',
      imagen: 'https://via.placeholder.com/200',
    },
  ];

  function Tarjeta(props) {
    const { titulo, descripcion, imagen } = props;

    return (
      <Card sx={{ width: '230px' }}>
        <CardMedia component='img' image={imagen} alt={titulo} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {titulo}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {descripcion}
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
    <div style={{ backgroundColor: 'var(--color2)' }}>
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
      {mostrarPasos && <ZonaPasos />}
    </div>
  );
}


export default Inicio;
