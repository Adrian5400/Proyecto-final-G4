import React, { Component } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { useState } from 'react'
import './css/Login.css';


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


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', state.email);
    console.log('Password:', state.password);
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
          <Card sx={{ backgroundColor: 'grisClaro.color', width:"90%"}}>
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
