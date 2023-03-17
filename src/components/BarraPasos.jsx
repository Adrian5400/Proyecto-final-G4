import * as React from 'react';
import { styled } from "@mui/material/styles";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import  StepIconProps  from "@mui/material/StepIcon";
import Box from '@mui/material/Box';  


// import ContextoHerramientas from './InicioPasos'
import "./css/pasos.css";


function ZonaPasos({ tarjetas }) {
  
  const [pasosOperacion, setPasosOperacion] = React.useState([]);
  const [pasoActual, setPaso] = React.useState(0);
  const pasos = getPasos();
  
  React.useEffect(() => {
    async function getPasosOperacion() {
      let lista = await fetch('http://127.0.0.1:8000/api/pasos');
      let listaJson = await lista.json();
      setPasosOperacion(listaJson);
    }
    getPasosOperacion();
  }, []);

const ColorlibStepLabel = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.completed}`]: {
      color: "#94c973"
    },
    [`&.${stepLabelClasses.active}`]: {
      color: "rgb(255, 255, 255, 0.9)"
    },

    color: "rgb(255, 0, 64)	"
  }
}));

  
  const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  background: "transparent",
  zIndex: 1,
  color: "white",
  width: 62,
  height: 62,
  display: "flex",
  borderColor: "white",
  borderWidth: 1,
  borderStyle: "solid",
  opacity: 0.3,
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    opacity: 1
  }),
  ...(ownerState.completed && {
    opacity: 1
  })
}));
  
  
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

const icons = {};
for (let i = 1; i <= 17; i++) {
  icons[i] = <span style={{ fontSize: 30 }}>{i}</span>;
}

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

  // var { tarjetas } = React.useContext(ContextoHerramientas);
  function getPasos() {
    if (pasosOperacion.length > 0) {
      return [pasosOperacion[0].titulo, pasosOperacion[1].titulo, pasosOperacion[2].titulo,
        pasosOperacion[3].titulo, pasosOperacion[4].titulo, pasosOperacion[5].titulo, pasosOperacion[6].titulo, pasosOperacion[7].titulo,
        pasosOperacion[8].titulo, pasosOperacion[9].titulo, pasosOperacion[10].titulo, pasosOperacion[11].titulo, pasosOperacion[12].titulo, pasosOperacion[13].titulo, pasosOperacion[14].titulo, pasosOperacion[15].titulo, pasosOperacion[16].titulo];
    } else {
      return ['cargando...'];
    }
  }

  function getPasoContenido(step) {
   if (pasosOperacion.length > 0) {
     switch (step) {
       case 0:
         return pasosOperacion[0].desc;
       case 1:
         return pasosOperacion[1].desc;
       case 2:
         return pasosOperacion[2].desc;
       case 3:
         return pasosOperacion[3].desc;
       case 4:
         return pasosOperacion[4].desc;
       case 5:
         return pasosOperacion[5].desc;
       case 6:
         return pasosOperacion[6].desc;
       case 7:
         return pasosOperacion[7].desc;
       case 8:
         return pasosOperacion[8].desc;
       case 9:
         return pasosOperacion[9].desc;
       case 10:
         return pasosOperacion[10].desc;
       case 11:
         return pasosOperacion[11].desc;
       case 12:
         return pasosOperacion[12].desc;
       case 13:
         return pasosOperacion[13].desc;
       case 14:
         return pasosOperacion[14].desc;
       case 15:
         return pasosOperacion[15].desc;
       case 16:
         return pasosOperacion[16].desc;
     }
     }else {
       return "Cargando...";
     }

    
    
  }

  
  
  function getDiv(step) {


    switch (step) {
      case 0:
        console.log(tarjetas);
        const tarjetasPaso1 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('1');
        });
        console.log(tarjetasPaso1);
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso1[0].image_url} alt={tarjetasPaso1[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 1</h1>
                <p>{tarjetasPaso1[0].desc}</p>
              </div>
            </div>
          </div>
        );

      case 1:
    
        const tarjetasPaso2 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('2');
        });
        console.log(tarjetasPaso2);
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso2[0].image_url} alt={tarjetasPaso2[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 2</h1>
                <p>{tarjetasPaso2[0].desc}</p>
              </div>
            </div>
          </div>
       
        );

      case 2:
        const tarjetasPaso3 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('3');
        });
        console.log(tarjetasPaso3);
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso3[0].image_url} alt={tarjetasPaso3[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 3</h1>
                <p>{tarjetasPaso3[0].desc}</p>
              </div>
            </div>
          </div>
       
        );

      case 3:
        const tarjetasPaso4 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('4');
        });
        console.log(tarjetasPaso4);
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso4[0].image_url} alt={tarjetasPaso4[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 4</h1>
                <p>{tarjetasPaso4[0].desc}</p>
              </div>
            </div>
          </div>
      
        );
      case 4:
        const tarjetasPaso5 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('5');
        });
        console.log(tarjetasPaso5);
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso5[0].image_url} alt={tarjetasPaso5[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 5</h1>
                <p>{tarjetasPaso5[0].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso5[1].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso5[1].image_url} alt={tarjetasPaso5[1].nombre} border="0" />
              </div>
            </div>
         
          </div>
        );

      
      case 5:
        const tarjetasPaso6 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('6');
        });
        console.log(tarjetasPaso6);
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso6[0].image_url} alt={tarjetasPaso6[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 6</h1>
                <p>{tarjetasPaso6[0].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso6[1].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso6[1].image_url} alt={tarjetasPaso6[1].nombre} border="0" />
              </div>
            </div>
           
       
          </div>
        );

      case 6:
        const tarjetasPaso7 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('7');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso7[0].image_url} alt={tarjetasPaso7[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 7</h1>
                <p>{tarjetasPaso7[0].desc}</p>
              </div>
            </div>
          </div>
        );

      case 7:
        const tarjetasPaso8 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('8');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso8[0].image_url} alt={tarjetasPaso8[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 8</h1>
                <p>{tarjetasPaso8[0].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso8[1].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso8[1].image_url} alt={tarjetasPaso8[1].nombre} border="0" />
              </div>
            </div>
          </div>
                 
        );
      case 8:
        const tarjetasPaso9 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('9');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso9[0].image_url} alt={tarjetasPaso9[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 9</h1>
                <p>{tarjetasPaso9[0].desc}</p>
              </div>
            </div>
          </div>
                 
        );
      case 9:
        const tarjetasPaso10 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('10');
        });
        return (
          
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso10[0].image_url} alt={tarjetasPaso10[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 10</h1>
                <p>{tarjetasPaso10[0].desc} </p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso10[1].desc} </p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso10[1].image_url} alt={tarjetasPaso10[0].nombre} border="0" />
              </div>
            </div>

          </div>
                 
        );
      case 10:
        const tarjetasPaso11 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('11');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso11[0].image_url} alt={tarjetasPaso11[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 11</h1>
                <p>{tarjetasPaso11[0].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso11[1].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso11[1].image_url} alt={tarjetasPaso11[1].nombre} border="0" />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <img src={tarjetasPaso11[2].image_url} alt={tarjetasPaso11[2].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <p>{tarjetasPaso11[2].desc}</p>
              </div>
            </div>
          </div>
                 
        );
      case 11:
        const tarjetasPaso12 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('12');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso12[0].image_url} alt={tarjetasPaso12[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 12</h1>
                <p>{tarjetasPaso12[0].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso12[1].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso12[1].image_url} alt={tarjetasPaso12[1].nombre} border="0" />
              </div>
            </div>
          </div>
                 
        );
      case 12:
        const tarjetasPaso13 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('13');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso13[0].image_url} alt={tarjetasPaso13[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 13</h1>
                <p>{tarjetasPaso13[0].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso13[1].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso13[1].image_url} alt={tarjetasPaso13[1].nombre} border="0" />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <img src={tarjetasPaso13[2].image_url} alt={tarjetasPaso13[2].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <p>{tarjetasPaso13[2].desc}</p>
              </div>
            </div>
          </div>
                 
        );
      case 13:
        const tarjetasPaso14 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('14');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso14[0].image_url} alt={tarjetasPaso14[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 14</h1>
                <p>{tarjetasPaso14[0].desc}</p>
              </div>
            </div>
          </div>
                 
        );
      case 14:
        const tarjetasPaso15 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('15');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso15[0].image_url} alt={tarjetasPaso15[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 15</h1>
                <p>{tarjetasPaso15[0].desc} </p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso15[1].desc} </p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso15[1].image_url} alt={tarjetasPaso15[1].nombre} border="0" />
              </div>
            </div>
          </div>
                 
        );
      case 15:
        const tarjetasPaso16 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('16');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso16[0].image_url} alt={tarjetasPaso16[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 16</h1>
                <p>{tarjetasPaso16[0].desc}</p>
              </div>
            </div>
          </div>
                 
        );
      case 16:
        const tarjetasPaso17 = tarjetas.filter(element => {
          let arreglo = element.steps.split(',');
          return arreglo.includes('17');
        });
        return (
          <div className='div3' style={{ backgroundColor: 'var(--color3)', color: 'var(--color5)', padding: '20px' }}>
            <div className='row'>
              <div className='col-md-6'>
                <img src={tarjetasPaso17[0].image_url} alt={tarjetasPaso17[0].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <h1>Paso 17</h1>
                <p>{tarjetasPaso17[0].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso17[1].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso17[1].image_url} alt={tarjetasPaso17[1].nombre} border="0" />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <img src={tarjetasPaso17[2].image_url} alt={tarjetasPaso17[2].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <p>{tarjetasPaso17[2].desc}</p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <p>{tarjetasPaso17[3].desc}</p>
              </div>
              <div className='col-md-6'>
                <img src={tarjetasPaso17[3].image_url} alt={tarjetasPaso17[3].nombre} border="0" />
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <img src={tarjetasPaso17[4].image_url} alt={tarjetasPaso17[4].nombre} border="0" />
              </div>
              <div className='col-md-6'>
                <p>{tarjetasPaso17[4].desc}</p>
              </div>
            </div>
                
              
              
              
          </div>
                 
        );
      default:
        return null;
    }
  }

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
          {pasos.map((label, index) => (
            <Step key={label}>
              <ColorlibStepLabel StepIconComponent={ColorlibStepIcon}>{label}</ColorlibStepLabel>
              <StepContent>
                <Typography style={{ color: 'gold' }}>{getPasoContenido(index)}</Typography>

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
