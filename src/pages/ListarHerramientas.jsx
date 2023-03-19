

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Button } from '@mui/material';
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
    
        const result = await response.json();
        console.log(result);
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

   

    
    


    return (
    <div style={{  height: '85vh', overflowY: 'scroll' }}>
        <ThemeProvider theme={theme}>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                <Alert id="alerta" severity="success" sx={{ display: 'none', marginBottom: '20px', marginTop: '20px'}}>Se ha borrado la herramienta con exito</Alert>
                    <Grid container justifyContent="center" sx={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button variant="contained" color="primary" onClick={() => handleCreateHerramienta()}>Crear Herramienta</Button>
                    </Grid>
                <TableContainer >
                    <Table border="1px solid white">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}>Nombre</TableCell>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}>Imagen</TableCell>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}>Acción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {herramientas.map(herramienta => (
                        <TableRow key={herramienta.id}>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}>{herramienta.nombre}</TableCell>
                            <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}>
                                <img src={herramienta.image_url} alt={herramienta.nombre} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            </TableCell>
                            <TableCell sx={{ color: theme.palette.blanco.color, border: '1px solid white' }}>
                                <Button variant="contained" color="error" onClick={() => handleDeleteHerramienta(herramienta.id)}>Borrar</Button>
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
