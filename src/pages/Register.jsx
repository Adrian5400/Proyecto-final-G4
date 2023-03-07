import React, { Component } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { Alert } from '@mui/material';
import { useState } from 'react'
import './css/Register.css';
import { Contexto } from './../App';


const theme= createTheme({
  palette:{
    negro:{ color:"#000000"},
    negroclaro:{ color:"#150f16"},
    gris:{ color:"#4c595b"},
    grisClaro:{ color:"#8f9ea9"},
    blanco:{ color:"#d6d6e7"},
  },
});

function Register() {

  const [state, setState] = useState({
    usuario: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

 const { usuarioPagina, setUsuarioPagina } = useContext(Contexto);


  const [error, setError] = useState('');

  const compararPasswords = () => {
    return state.password == state.confirmPassword;
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', state.email);
    console.log('Password:', state.password);
    console.log('Email:', state.usuario);
    console.log('Password:', state.confirmPassword);



    if (!compararPasswords()) { 
        setError('¡No coinciden las contraseñas!');
        document.getElementById('error').style.display = 'block';
    }
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  }

  

  return (
    <ThemeProvider theme={theme}>
       <Grid id="contenedor" sx={{ display:'flex', justifyContent: 'center'}}>
          <Card sx={{ backgroundColor: 'grisClaro.color', width:"45%"}}>
            <CardContent sx={{ borderColor: 'blanco.color', borderWidth: '1px', borderStyle: 'solid'}}>
              <form onSubmit={handleSubmit}>

                <label>Id User</label>
                <TextField
                  id="usuario"
                  name="usuario"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={state.usuario}
                  onChange={handleInputChange}
                  sx={{ backgroundColor: 'blanco.color',marginBottom: '20px' }}
                />
                <label>Email</label>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={state.email}
                  onChange={handleInputChange}
                  sx={{ backgroundColor: 'blanco.color',marginBottom: '20px' }}
                />
                <label>Password</label>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={state.password}
                  onChange={handleInputChange}
                  sx={{  backgroundColor: 'blanco.color',marginBottom: '20px' }}
                />
                <label>Confirm Password</label>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={state.confirmPassword}
                  onChange={handleInputChange}
                  sx={{  backgroundColor: 'blanco.color',marginBottom: '20px' }}
                />
                <Alert id="error" severity="error" sx={{ display: 'none', marginBottom: '20px'}}>{error}</Alert>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign in
                </Button>
                
              </form>
            </CardContent>
          </Card>
      </Grid>
    </ThemeProvider>
  );
}

export default Register;