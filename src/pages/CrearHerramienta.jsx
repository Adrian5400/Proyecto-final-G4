import React, { Component, useContext } from 'react';
import { Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Card, CardContent, Grid, Input } from '@mui/material';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const theme= createTheme({
    palette:{
      negro:{ color:"#000000"},
      negroclaro:{ color:"#150f16"},
      gris:{ color:"#4c595b"},
      grisClaro:{ color:"#8f9ea9"},
      blanco:{ color:"#d6d6e7"},
    },
  });


function CrearHerramienta() {

  const [herramienta, setHerramienta] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    pasos: ''
  });

  const [alerta, setAlerta] = useState('');
  const [severity, setSeverity] = useState('');
  const [pasos, setPasos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);


  const fetchPasos = async () => {
    
    const response = await fetch('http://127.0.0.1:8000/api/pasos');
    const data = await response.json();
    setPasos(data);
  };

  useEffect(() => {
    fetchPasos();
  }, []);

  const navigate = useNavigate();

  const handleListarHerramienta = () => {
      navigate("/herramientas", { replace: true }); 
  };

  const handleOpenPasosModal = () => {
    setModalOpen(true);
  };

  const handleClosePasosModal = () => {
    setModalOpen(false);
  };

 
  const PasosModal = ({ open, handleClose, pasos }) => {
   
    
    return (
      <Modal sx={{ width: {xs: '100%', md: '27%'} , marginTop:{xs: '8em', md: '3.5em'}}} open={open} onClose={handleClose}>
         
         <Paper sx={{ maxHeight: {xs: '60vh', md: '80vh'}, overflow: 'auto', mx: 2, mt: 2 }}>
            <TableContainer sx={{borderColor: 'blanco.color', borderWidth: '3px', borderStyle: 'solid'}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Descripción</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pasos.map((paso) => (
                    <TableRow key={paso.id}>
                      <TableCell>{paso.id}</TableCell>
                      <TableCell>{paso.desc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
      </Modal>
    );
  };

  

  const handleSubmit =async (event) => {
    event.preventDefault();
    const regexPasos = /^(\d+)(,\d+)*$/;

    const extension = herramienta.imagen.split('.').pop().toLowerCase();
    if (extension!=="jpg" && extension!=="fbx") {
      setAlerta("Formato de imagen incorrecto. Se espera un .jpg o .fbx");
      setSeverity('error');
      document.getElementById('alerta').style.display = 'block';
      
    } else if (!regexPasos.test(herramienta.pasos)) {
      setAlerta("La sintaxis de los pasos no es correcta. Deben ser números separados por coma (ej: 1,2,3)");
      setSeverity('error');
      document.getElementById('alerta').style.display = 'block';

    }else if(herramienta.pasos <1 || herramienta.pasos >17){
      setAlerta("Los pasos van de 1 a 17");
      setSeverity('error');
      document.getElementById('alerta').style.display = 'block';
    }else {
      document.getElementById('alerta').style.display = 'block';
      setSeverity('success');
      setAlerta("Se ha creado la herramienta con éxito");

      const formData = new FormData();
      formData.append('nombre', herramienta.nombre);
      formData.append('desc', herramienta.descripcion);
     formData.append('image', event.target.imagen.files[0], event.target.imagen.files[0].name);
      formData.append('steps', herramienta.pasos);

      const response = await fetch('http://127.0.0.1:8000/api/herramientas', {
        method: "POST",
        body: formData
      });
    }

    setTimeout(() => {
      document.getElementById('alerta').style.display = 'none';
    }, 3000);
    
  };

 

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setHerramienta({
      ...herramienta,
      [name]: value,
    });
  }

  

    return (
        <ThemeProvider theme={theme}>
           <Grid id="contenedor" sx={{ display:'flex', justifyContent: 'center' }}>
             
              <Card sx={{ backgroundColor: 'grisClaro.color',width:"45%"}}>
                <CardContent sx={{ borderColor: 'blanco.color', borderWidth: '1px', borderStyle: 'solid' }}>
                  <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <TextField 
                      id="nombre"
                      name="nombre"
                      type="text"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      multiline
                      value={herramienta.nombre}
                      onChange={handleChange}
                      sx={{ backgroundColor: 'blanco.color',marginBottom: '20px' }}
                    />
                   
                    <label>Descripción</label>
                    <TextField
                      id="descripcion"
                      name="descripcion"
                      type="text"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      multiline
                      value={herramienta.descripcion}
                      onChange={handleChange}
                      sx={{  backgroundColor: 'blanco.color',marginBottom: '20px' }}
                    />

                    <label>Imagen</label>
                    <Input
                        id="imagen"
                        name="imagen"
                        type="file"
                        accept=".jbx, .jpg"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        value={herramienta.imagen}
                        onChange={handleChange}
                        sx={{  backgroundColor: 'blanco.color', marginBottom: '20px', padding:'10px', marginTop:'20px' }}
                    />
                    
                    <label>Pasos, ej (1,4,5)</label>
                    <TextField
                      id="pasos"
                      name="pasos"
                      type="text"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      multiline
                      value={herramienta.pasos}
                      onChange={handleChange}
                      sx={{  backgroundColor: 'blanco.color',marginBottom: '20px' }}
                    />
                    <Alert id="alerta" severity={severity} sx={{ display: 'none', marginBottom: '20px', marginTop: '20px'}}>{alerta}</Alert>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Crear herramienta 
                    </Button>
                  </form>
                </CardContent>
              </Card>
          </Grid>

          <Grid  sx={{ display:'flex', justifyContent: 'center'}}>
            <Grid  sx={{width:"50%", display:'flex', justifyContent: 'center',  gap: '2rem'}}>
              <Button sx={{width:"20%",  marginTop: '25px', marginBottom: '15px'}}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleListarHerramienta()}
                >Volver
              </Button>
              <Button sx={{width:"20%",  marginTop: '25px', marginBottom: '15px'}}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleOpenPasosModal()}
                >Ver Pasos
              </Button>
              <PasosModal open={modalOpen} handleClose={handleClosePasosModal} pasos={pasos} />
            </Grid>
          </Grid>
        </ThemeProvider>
    );
}

export default CrearHerramienta;