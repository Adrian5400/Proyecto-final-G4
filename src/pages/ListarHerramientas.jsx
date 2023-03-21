

import React, { useState, useEffect , useRef} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

const theme= createTheme({
    palette:{
      negro:{ color:"#000000"},
      negroclaro:{ color:"#150f16"},
      gris:{ color:"#4c595b"},
      grisClaro:{ color:"#8f9ea9"},
      blanco:{ color:"#d6d6e7"},
    },
});




function ListarHerramientas() {

    const [herramientas, setHerramientas] = useState([]);
    const tableRef = useRef(null);

    const fetchHerramientas = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/herramientas');
        const data = await response.json();
        setHerramientas(data);
    };

    useEffect(() => {
        fetchHerramientas();
    }, []);


    const handleDeleteHerramienta = async (id) => {
        const response = await fetch(`http://127.0.0.1:8000/api/herramientas/${id}`, {
          method: 'DELETE',
        });
    
       
        tableRef.current.scrollIntoView();
        document.getElementById('alerta').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('alerta').style.display = 'none';
          }, 5000);
    
        fetchHerramientas();
    };
    const navigate = useNavigate();

    const handleCreateHerramienta = () => {
        navigate("/crearHerramienta", { replace: true }); 
    };

    const ComparacionExtension = (imagen) => {
        const extension = imagen.split('.').pop().toLowerCase();
        console.log(imagen);
        if (extension!=="fbx") {
            return imagen;
        }else{
            return "https://www.kindpng.com/picc/m/500-5007843_nursing-clipart-scissors-surgeon-clipart-hd-png-download.png";
        }
    };
   


    return (
    <div style={{  height: '85vh', overflowY: 'scroll' }}>
        <ThemeProvider theme={theme}>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }} ref={tableRef}>
                <div>
                <Alert id="alerta" severity="success" sx={{ display: 'none', marginBottom: '20px', marginTop: '20px'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Se ha borrado la herramienta con exito </Typography></Alert>
                    <Grid container justifyContent="center" sx={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button variant="contained" color="primary" onClick={() => handleCreateHerramienta()}><Typography style={{fontFamily: 'Monaco, monospace'}}>Crear Herramienta</Typography></Button>
                    </Grid>
                <TableContainer >
                    <Table border="1px solid white" sx={{ marginBottom:'2em' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Nombre</Typography></TableCell>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Imagen</Typography></TableCell>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Acción</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {herramientas.map(herramienta => (
                        <TableRow key={herramienta.id}>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>{herramienta.nombre}</Typography></TableCell>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}>
                            
                             <img src={ComparacionExtension(herramienta.image_url)} alt={herramienta.nombre} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            
                            </TableCell>
                            <TableCell sx={{ color: theme.palette.blanco.color, border: '1px solid white' }}>
                                <Button variant="contained" color="error" onClick={() => handleDeleteHerramienta(herramienta.id)}><Typography style={{fontFamily: 'Monaco, monospace'}}>Borrar</Typography></Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                </div>
            </Grid>
        </ThemeProvider>
    </div>
    )
}


export default ListarHerramientas;
