import React, { useState, useEffect, useRef} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Alert } from '@mui/material';

const theme= createTheme({
    palette:{
      negro:{ color:"#000000"},
      negroclaro:{ color:"#150f16"},
      gris:{ color:"#4c595b"},
      grisClaro:{ color:"#8f9ea9"},
      blanco:{ color:"#d6d6e7"},
    },
});

function ListarUsuarios() {
  const [users, setUsers] = useState([]);
  const tableRef = useRef(null);

  const fetchUsers = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (email) => {
    const response = await fetch(`http://127.0.0.1:8000/api/users/${email}`, {
      method: 'DELETE',
    });

    const result = await response.json();
    
    tableRef.current.scrollIntoView();
    document.getElementById('alerta').style.display = 'block';
  
    setTimeout(() => {
        document.getElementById('alerta').style.display = 'none';
      }, 5000);

      
    fetchUsers();
    
  };

  return (
<div style={{  height: '85vh', overflowY: 'scroll' }}>
    <ThemeProvider theme={theme}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}  ref={tableRef}>
            <div>
            <Alert id="alerta" severity="success" sx={{ display: 'none', marginBottom: '20px', marginTop: '20px'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Se ha borrado el usuario con exito</Typography></Alert>
            <TableContainer >
                <Table border="1px solid white" sx={{ marginBottom:'2em', marginTop: '2em' }}>
                <TableHead>
                    <TableRow>
                    <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Nombre</Typography></TableCell>
                    <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Email</Typography></TableCell>
                    <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>Acción</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                    <TableRow key={user.email}>
                        <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>{user.name}</Typography></TableCell>
                        <TableCell sx={{color: theme.palette.blanco.color, border: '1px solid white'}}><Typography style={{fontFamily: 'Verdana, sans-serif'}}>{user.email}</Typography></TableCell>
                        <TableCell sx={{ color: theme.palette.blanco.color, border: '1px solid white' }}>
                          {user.email !== "test@example.com" &&
                            <Button variant="contained" color="error" onClick={() => handleDeleteUser(user.email)}><Typography style={{fontFamily: 'Monaco, monospace'}}>Borrar</Typography></Button>
                          }
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
  );
}

export default ListarUsuarios;