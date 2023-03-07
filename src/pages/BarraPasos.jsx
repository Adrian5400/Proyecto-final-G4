import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./css/pasos.css";

function getPasos() {
  return ['Primer paso de la operación', 'Segundo paso de la operación', 'Tercer paso de la operación', 'Cuarto paso de la operacion', 'Quinto paso de la operación'];
}

function getPasoContenido(step) {
  switch (step) {
    case 0:
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";
    case 1:
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    case 2:
      return "Prueba prueba prueba prueba";
      case 3:
      return "¿?";
      case 4:
      return "jiji cuatro";
  }
}

function getDiv(step) {
  switch (step) {
    case 0:
      return (
        <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
                <div className='col-md-6'>
                    <h1>Paso 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
            </div>
        </div>
    );
    
    case 1:
      return (
        <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
                <div className='col-md-6'>
                    <h1>Paso 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
            </div>
        </div>
    );
    
    case 2:
      return (
        <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
                <div className='col-md-6'>
                    <h1>Paso 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
            </div>
        </div>
    );
    
    case 3:
      return (
        <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
                <div className='col-md-6'>
                    <h1>Paso 4</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                </div>
                <div className='col-md-6'>
                    <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                </div>
            </div>
        </div>
    );
        case 4:
          return (
            <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px'}}>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                    </div>
                    <div className='col-md-6'>
                        <h1>Paso 5</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugiat neque unde ut similique placeat ipsam quo, dolore consequatur eligendi, in nobis maiores nulla id laudantium quos inventore doloremque nisi.</p>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://i.ibb.co/0hY1Z1T/1.png" alt="1" border="0" />
                    </div>
                </div>
            </div>
        );
        
    default:
      return null;
  }
}

function ZonaPasos() {
  const [pasoActual, setPaso] = React.useState(0);
  const pasos = getPasos();

  const Siguiente = () => {
    setPaso(pasoActual + 1);
  }

  const Atras = () => {
    setPaso(pasoActual - 1);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', marginTop: '2em'}}>
      <Box sx={{ width: '50%', mr: 2 }}>
        <Stepper activeStep={pasoActual} orientation="vertical">
          {pasos.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
              <Typography style={{ color: 'red' }}>{getPasoContenido(index)}</Typography>

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
            {getDiv(pasoActual)}
        </Box>
    </Box>
    );
}

export default ZonaPasos;
