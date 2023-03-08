import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ZonaPasos from './BarraPasos';

function Inicio() {
  const [mostrarPasos, setMostrarPasos] = useState(false);

  const handleSiguienteClick = () => {
    setMostrarPasos(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--color2)'}}>
      <h1 style={{ color: 'var(--color5)' }}>Inicio</h1>
      {!mostrarPasos && (
        <Button
          variant="contained"
          sx={{ mt: 1, mr: 1, backgroundColor: 'var(--color3)', color: 'var(--color5)' }}
          onClick={handleSiguienteClick}
        >
          Siguiente
        </Button>
      )}
      {mostrarPasos && <ZonaPasos />}
    </div>
  );
}

export default Inicio;