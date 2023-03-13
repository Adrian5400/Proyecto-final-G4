import React, { Component, useContext } from 'react';
import { Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { useState } from 'react'
import './css/Login.css';
import { Contexto } from './../App';
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

function Login() {

  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function goHome() {
    navigate("/", { replace: true }); 
  }


 const { usuarioPagina, setUsuarioPagina } = useContext(Contexto);


const handleSubmit = async (event) => {
  event.preventDefault();
  const { email, password } = state;

  const response = await fetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    // Si la respuesta es 200 OK, el usuario inició sesión correctamente
    setUsuarioPagina(previous => ({...previous, email, loggedIn: true, admin: email==='test@example.com'}));
    goHome();
  } else {
    // Si la respuesta es un error, muestra el mensaje de error devuelto por la API
    setError(data.error);
    document.getElementById('error').style.display = 'block';
  }
};


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
          <Card sx={{ backgroundColor: 'grisClaro.color',width:"45%"}}>
            <CardContent sx={{ borderColor: 'blanco.color', borderWidth: '1px', borderStyle: 'solid' }}>
              <form onSubmit={handleSubmit}>
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

export default Login;