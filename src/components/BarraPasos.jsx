import * as React from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import ContextoHerramientas from './InicioPasos'
import "./css/pasos.css";


function ZonaPasos({tarjetas}) {
  const [pasoActual, setPaso] = React.useState(0);
  const pasos = getPasos();

// var { tarjetas } = React.useContext(ContextoHerramientas);
function getPasos() {
  return ['Primer paso de la operación', 'Segundo paso de la operación', 'Tercer paso de la operación', 
    'Cuarto paso de la operacion', 'Quinto paso de la operación', 'Sexto paso de la operación', 'Séptimo paso de la operación', 'Octavo paso de la operación',
  'Noveno paso de la operación', 'Décimo paso de la operación', 'Undécimo paso de la operación', 'Duodécimo paso de la operación', 'Decimotercero paso de la operación', 'Decimocuarto paso de la operación', 'Decimoquinto paso de la operación', 'Decimosexto paso de la operación', 'Decimoséptimo paso de la operación'];
}

function getPasoContenido(step) {
  switch (step) {
    case 0:
      return "Administración de heparina sódica para evitar trombos.";
    case 1:
      return "Introducir un electrodo de marcapasos de fijación pasiva por la vena femoral derecha.";
    case 2:
      return "Introducir un catéter 'pigtail' centimetrado en la arteria femoral derecha para localizar el plano valvular.";
    case 3:
      return "Colocación del sistema de radioscopia según el ángulo convenido en el estudio de imagen preoperatorio.";
    case 4:
      return "Se realiza una incisión de 4cm en la piel, y se practica la miniesternotomia con una sierra oscilante hasta el segundo espacio intercostal";
    case 5:
      return "Se coloca un miniseparador esternal, se abre el perciardio y se aplican puntos de traccion hacia arriba.";
    case 6:
      return "Se emplean dos suturas en bolsa de tabaco sobre la aorta ascendente.";
    case 7:
      return "Se practica una puncion en la bolsa de tabaco y se inserta un introductor arterial de 6 F.";
    case 8:
      return "Para cruzar retrogradamente la valvula aortica se realizan con una guia teflonada recta de 35' y 260cm de largo. Pueden usarse guías hidrofílicas.";
    case 9:
      return "Para pacientes con raices aorticas pequeñas se utiliza el cateter Amplatz AL1 y para grandes el Amplatz AL2.";
    case 10:
      return "Cuando el cateter haya cruzado la valvula aortica, se intercambia la guia usada por una extrastiff. Debe tener una curva suave y se debe adaptar al ventriculo. Se puede utilizar un 'pigtail' para ayudar.";
    case 11:
      return "Se retira el introductor de 6 F y se coloca el introductor 'Certitude' en la aorta hasta la marca de 2cm. Debe hacerse de manera muy suave y controlada porque no tenemos guia en el ventriculo.";
    case 12:
      return "Se introduce la prótesis hasta el plano anular guiados por el 'pigtail', con el punto del centro quedando un poco por encima de dicho plano.";
    case 13:
      return "Se practica sobreestimulación y una aortografía tras la caída de presión arterial.";
    case 14:
      return "Se expande la prótesis con inflado muy lento para reajustar si fuera necesario.";
    case 15:
      return "Se realiza una ecocardiografía para ver si el comportamiento de la prótesis es el correcto.";
    case 16:
      return "Se retiran la guia, cateter balon y el introductor. Se anudan las bolsas de tabaco y cierran las incisiones.";


    
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
                        <img src={tarjetasPaso10[1].image_url}  alt={tarjetasPaso10[0].nombre}  border="0" />
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
                        <img src={tarjetasPaso15[0].image_url} alt={tarjetasPaso15[0].nombre}  border="0" />
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
                        <img src={tarjetasPaso15[1].image_url}  alt={tarjetasPaso15[1].nombre}  border="0" />
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
