import * as React from 'react';
import { styled } from "@mui/material/styles";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./css/pasos.css";


export default function PreparacionCirujia() {
  const navigate = useNavigate();

  const [preparaciones, setPreparaciones] = React.useState([]);
  const [pasoActual, setPaso] = React.useState(0);
  const pasos = getPasos();
  const { state } = useLocation();
  const { tarjetas } = state || {};
  const goCirujia = () => navigate("/pasosCirujia", { replace: true, state:{tarjetas} });



  
  React.useEffect(() => {
      async function getPreparaciones() {
          let lista = await fetch('http://127.0.0.1:8000/api/preparations');
          let listaJson = await lista.json();
          setPreparaciones(listaJson);
          console.log(listaJson);
      }
      getPreparaciones();
  }, []);

const ColorlibStepLabel = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.completed}`]: {
      color: "#94c973"
    },
    [`&.${stepLabelClasses.active}`]: {
      color: '#b78700'
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
for (let i = 1; i <= 20; i++) {
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

  function getPasos() {
    if (preparaciones.length > 0) {
      return [preparaciones[0].titulo, preparaciones[1].titulo, preparaciones[2].titulo,
        preparaciones[3].titulo, preparaciones[4].titulo, preparaciones[5].titulo, preparaciones[6].titulo, preparaciones[7].titulo,
        preparaciones[8].titulo, preparaciones[9].titulo, preparaciones[10].titulo, preparaciones[11].titulo, preparaciones[12].titulo, preparaciones[13].titulo, preparaciones[14].titulo, preparaciones[15].titulo, preparaciones[16].titulo,
        preparaciones[17].titulo,
        preparaciones[18].titulo,
        preparaciones[19].titulo];
    } else {
      return ['cargando...'];
    }
  }

  function getPasoContenido(step) {
   if (preparaciones.length > 0) {
     switch (step) {
       case 0:
         return preparaciones[0].desc;
       case 1:
         return preparaciones[1].desc;
       case 2:
         return preparaciones[2].desc;
       case 3:
         return preparaciones[3].desc;
       case 4:
         return preparaciones[4].desc;
       case 5:
         return preparaciones[5].desc;
       case 6:
         return preparaciones[6].desc;
       case 7:
         return preparaciones[7].desc;
       case 8:
         return preparaciones[8].desc;
       case 9:
         return preparaciones[9].desc;
       case 10:
         return preparaciones[10].desc;
       case 11:
         return preparaciones[11].desc;
       case 12:
         return preparaciones[12].desc;
       case 13:
         return preparaciones[13].desc;
       case 14:
         return preparaciones[14].desc;
       case 15:
         return preparaciones[15].desc;
       case 16:
         return preparaciones[16].desc;
        case 17:
        return preparaciones[17].desc;
        case 18:
        return preparaciones[18].desc;
        case 19:
        return preparaciones[19].desc;
     }
     }else {
       return "Cargando...";
     }

    
    
  }

  const Siguiente = () => {
    setPaso(pasoActual + 1);
     
  }

  const Atras = () => {
    setPaso(pasoActual - 1);
  }

  return (
<div>
  <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', marginTop: '2em', height: '75vh', overflowY: 'scroll', paddingLeft: '5em' }}>
      <Box sx={{ width: '100%', mr: 2 }}>
        <Stepper activeStep={pasoActual} orientation="vertical">
          {pasos.map((label, index) => (
            <Step key={label}>
              <ColorlibStepLabel StepIconComponent={ColorlibStepIcon}>{label}</ColorlibStepLabel>
              <StepContent>
                <Typography style={{ color: 'gold' }} fontFamily='lucida console'>{getPasoContenido(index)}</Typography>

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
    </Box>
    <div style={{display: 'grid', alignItems: 'center', justifyItems: 'center'}}>
    <Button variant="outlined" sx={{pt: 1, pr: 1}}  style={{backgroundColor: "#94c973", width: '20%', padding: '1em 0 1em 0', textAlign: 'center', textJustify: 'center' }} onClick={()=>goCirujia()}>
    <Typography style={{ color: 'var(--color1' }} variant='h6' fontFamily='monaco'>Pasar a operación</Typography></Button>
</div>
</div>

  );
}

