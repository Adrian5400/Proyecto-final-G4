import React, { useState, useEffect, createContext} from 'react';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Decodificador from '../components/Decodificador';
import { useNavigate } from 'react-router-dom';

export const ContextoHerramientas = createContext();

function Inicio() {
  const navigate = useNavigate();
  const [tarjetas, setTarjetas] = useState([]);
  const placeholderImage = 'https://www.kindpng.com/picc/m/500-5007843_nursing-clipart-scissors-surgeon-clipart-hd-png-download.png'
  const goPrep = () => navigate("/pasosPrep", { replace: true, state:{tarjetas} });
  const goCirujia = () => navigate("/pasosCirujia", { replace: true, state:{tarjetas} });


  useEffect(() => {
    async function getHerramientas() {
      let lista = await fetch('http://127.0.0.1:8000/api/herramientas');
      let listaJson = await lista.json();
      setTarjetas(listaJson);
    }
    getHerramientas();
  }, []);

  console.log(tarjetas);

  function Tarjeta(props) {
    const { nombre, desc, image_url, steps, modelo } = props;

    return (
      <Card sx={{ maxWidth: '15em', margin: '1.8rem', marginTop: '3rem' }}>

        {
        modelo ? <CardContent><Decodificador modelo={modelo} /></CardContent>  : <CardMedia component='img' image={image_url} alt={nombre} sx={{ height: '14em' }} onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage }} /> 
        }
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold' }}>
            {nombre}
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ marginBottom: '0.8rem' }}>
            {desc}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Se encuentra en los pasos: {steps}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <ContextoHerramientas.Provider value={{ tarjetas }}>
      <div style={{ backgroundColor: 'var(--color2)', height: '85vh' }}>
          <div className='container'>
  <div style={{ backgroundColor: 'var(--color1)'}}>
                <h1 style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', color: 'var(--color5)'}}>¿Dispones de todas estas herramientas?</h1>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                <Button variant='contained' color='primary' onClick={()=>{goPrep()}} style={{ backgroundColor: 'var(--color3)', marginBottom: '1rem', fontFamily: 'monaco'}}>
                Preparacion para cirugía
              </Button>
                  </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
              <Button variant='contained' color='primary' onClick={()=>{goCirujia()}} style={{ backgroundColor: 'var(--color3)', marginBottom: '1rem', fontFamily: 'monaco'}}>
                Proceder a operar
              </Button>
            </div>
            </div>
            
            <div className='col-12' style={{ height: '85vh', marginLeft: '2rem', marginRight: '2rem'}}>
              <div className='d-flex flex-wrap'>
                {tarjetas.map((tarjeta) => (
                  <Tarjeta key={tarjeta.id} {...tarjeta} />
                ))}
              </div>
            </div>

          
          </div>

      </div>

    </ContextoHerramientas.Provider>
  );
}

export default Inicio;