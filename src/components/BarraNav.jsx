import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Contexto } from './../App';
import './css/navegacion.css';
import Modal from '@mui/material/Modal';
import {  Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const theme= createTheme({
  palette:{
    negro:{ color:"#000000"},
    negroclaro:{ color:"#150f16"},
    gris:{ color:"#4c595b"},
    grisClaro:{ color:"#8f9ea9"},
    blanco:{ color:"#d6d6e7"},
  },
});

export default function BarraNav() {
  const navigate = useNavigate();
  const { usuarioPagina, setUsuarioPagina } = useContext(Contexto);
  const [activeLink, setActiveLink] = useState('inicio');
  const [modalOpen, setModalOpen] = useState(false);

  const goRegister = () => navigate("/register", { replace: true });
  const goLogin = () => navigate("/login", { replace: true });
  const goHome = () => navigate("/", { replace: true });
  const goPasos = () => navigate("/pasos", { replace: true });
  const goEquipo = () => navigate("/equipo", { replace: true });
  const goUsuarios = () => navigate("/usuarios", { replace: true });
  const goVistaHerramientas = () => navigate("/modelos3d", { replace: true });
  const goHerramientas = () => navigate("/herramientas", { replace: true });
  const goHerramientasBusqueda = () => navigate("/modelos3dBusqueda", { replace: true });
  const goLogout = () => {
    
    setUsuarioPagina({ email: '', loggedIn: false, admin: false });
    navigate('/', { replace: true });
    setModalOpen(false);
  }

const changeActive = link => setActiveLink(link);


const handleOpen = () => {
  setModalOpen(true);
};

const handleClose = () => {
  setModalOpen(false);
};

 const LogoutModal = ({ open, handleClose }) => {
   
    
    return (
      <Modal sx={{width:'100%' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}} open={open} onClose={handleClose}>
        <Paper sx={{width:'30%', maxHeight: {xs: '60vh', md: '80vh'}, display: 'flex',flexDirection:'column', alignItems: 'center', paddingTop:3, paddingBottom:3, borderColor: 'grisClaro.color', borderWidth: '5px', borderStyle: 'solid', borderRadius: '10px'}}>
          <h2 style={{textAlign: 'center', margin: 0, paddingBottom:3}}>Tu sesión ha finalizado</h2>
          <Button style={{marginTop:10}} variant="contained" color="error" onClick={goLogout}>Continuar</Button>
        </Paper>
      </Modal>
    );
  };

if(usuarioPagina.admin){
  return (
    <Navbar style={{ backgroundColor: "var(--color1)", position: "fixed", top: '0', width: "100%",}}>
      <Navbar.Brand className="col-sm-6 col-md-8 col-lg-8">
    <span className='spanAdmin' style={{ color: activeLink === 'inicio' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('inicio'); goHome();}}>Inicio</span>
    <span className='spanAdmin' style={{ color: activeLink === 'modelos3d' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em`}} onClick={() => {changeActive('modelos3d'); goVistaHerramientas()}}>3D</span>
    <span className='spanAdmin' style={{ color: activeLink === 'pasos' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('pasos'); goPasos()}}>Pasos</span>
    <span className='spanAdmin' style={{ color: activeLink === 'usuarios' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('usuarios'); goUsuarios()}}>Usuarios</span>
    <span className='spanAdmin' style={{ color: activeLink === 'herramientas' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('herramientas'); goHerramientas()}}>Herramientas</span>
  </Navbar.Brand>
  <Nav className="ml-auto col-sm-6 col-md-4 col-lg-4 d-flex justify-content-evenly">
    <span className="hide-on-md" style={{ color: "var(--color5)", marginRight: "1em", paddingTop: "0.5em" }}>{usuarioPagina.email}</span>
    <Nav.Link style={{ fontFamily: "Monaco, monospace", color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => handleOpen()}>LOG OUT</Nav.Link>    
  </Nav>
  <LogoutModal open={modalOpen} handleClose={handleClose}/>
</Navbar>
  )

}else if (usuarioPagina.loggedIn && !usuarioPagina.admin) {
    return ( 
      <Navbar style={{ fontFamily: 'Verdana, sans-serif', backgroundColor: "var(--color1)", position: "fixed", top: '0', width: "100%" }}>
        <Navbar.Brand className="col-sm-6 col-md-8 col-lg-8">
          <span className='spanUser' style={{ color: activeLink === 'inicio' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em`}} onClick={() => {changeActive('inicio'); goHome();}}>Inicio</span>
          <span className='spanUser' style={{ color: activeLink === 'equipo' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em`}} onClick={() => {changeActive('equipo'); goEquipo();}}>Equipo</span>
          <span className='spanUser' style={{ color: activeLink === 'pasos' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em`}} onClick={() => {changeActive('pasos'); goPasos()}}>Pasos</span>
          <span className='spanUser' style={{ color: activeLink === 'modelos3d' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em`}} onClick={() => {changeActive('modelos3d'); goVistaHerramientas()}}>Herramientas</span>
        </Navbar.Brand>
          <Nav className="ml-auto col-sm-6 col-md-4 col-lg-4 d-flex justify-content-evenly">
        <span className="hide-on-md" style={{ color: "var(--color5)", marginRight: "1em", paddingTop: "0.5em" }}>{usuarioPagina.email}</span>
        <Nav.Link style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => handleOpen()}>Logout</Nav.Link>      
      </Nav>
      <LogoutModal open={modalOpen} handleClose={handleClose}/>
    </Navbar>
     
)

  }else {
    return (
      <Navbar style={{ fontFamily: 'Verdana, sans-serif', backgroundColor: "var(--color1)", position: "fixed", top: '0', width: "100%" }}>
        <Navbar.Brand className="col-sm-6 col-md-8 col-lg-9" >
          <span style={{ color: activeLink === 'inicio' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: "3em" }} onClick={() => {changeActive('inicio'); goHome();}}>Inicio</span>
          <span style={{ color: activeLink === 'equipo' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: "3em" }} onClick={() => {changeActive('equipo'); goEquipo();}}>Equipo</span>
          <span style={{ color: activeLink === 'modelos3d' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em`}} onClick={() => {changeActive('modelos3d'); goVistaHerramientas()}}>3D</span>

        </Navbar.Brand>
        <Nav className="ml-auto col-sm-6 col-md-4 col-lg-3 d-flex justify-content-evenly">
          <Nav.Link  className="mr-3" style={{ fontFamily: 'Monaco, monospace', color: activeLink === 'register' ? '#b78700' : "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => {changeActive('register'); goRegister()}}>REGISTRARSE</Nav.Link>
          <Nav.Link  style={{ fontFamily: 'Monaco, monospace', color: activeLink === 'login' ? '#b78700' : "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => {changeActive('login'); goLogin()}}>LOG IN</Nav.Link>      
        </Nav>
      </Navbar>
    );
  }
}
