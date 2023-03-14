import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';
import { Contexto } from './../App';
import './css/navegacion.css';


export default function BarraNav() {
  const navigate = useNavigate();
  const { usuarioPagina, setUsuarioPagina } = useContext(Contexto);
  const [activeLink, setActiveLink] = useState('');
  const goRegister = () => navigate("/register", { replace: true });
  const goLogin = () => navigate("/login", { replace: true });
  const goHome = () => navigate("/", { replace: true });
  const goPasos = () => navigate("/pasos", { replace: true });
  const goEquipo = () => navigate("/equipo", { replace: true });
  const goUsuarios = () => navigate("/usuarios", { replace: true });
  const goHerramientas = () => navigate("/herramientas", { replace: true });
  const goLogout = () => {
    setUsuarioPagina({ email: '', loggedIn: false, admin: false });
    navigate('/', { replace: true });
  }
const changeActive = link => setActiveLink(link);




if(usuarioPagina.admin){
  return (
    <Navbar style={{ backgroundColor: "var(--color1)", position: "fixed", top: '0', width: "100%" }}>
      <Navbar.Brand className="col-sm-6 col-md-8 col-lg-8">
        <span style={{ color: activeLink === 'inicio' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('inicio'); goHome();}}>Inicio</span>
        <span style={{ color: activeLink === 'equipo' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('equipo'); goEquipo();}}>Equipo</span>
        <span style={{ color: activeLink === 'pasos' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('pasos'); goPasos()}}>Pasos</span>
        <span style={{ color: activeLink === 'usuarios' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('usuarios'); goUsuarios()}}>Listar Usuarios</span>
        <span style={{ color: activeLink === 'herramientas' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('herramientas'); goHerramientas()}}>Herramientas</span>

      </Navbar.Brand>
      <Nav className="ml-auto col-sm-10 col-md-4 col-lg-4 d-flex justify-content-evenly">
        <span className="hide-on-md" style={{ color: "var(--color5)", marginRight: "1em", paddingTop: "0.5em" }}>{usuarioPagina.email}</span>
        <Nav.Link style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => goLogout()}>Logout</Nav.Link>      
      </Nav>
    </Navbar>
  )

}else if (usuarioPagina.loggedIn && !usuarioPagina.admin) {
    return (
      <Navbar style={{ backgroundColor: "var(--color1)", position: "fixed", top: '0', width: "100%" }}>
        <Navbar.Brand className="col-sm-6 col-md-8 col-lg-8">
          <span style={{ color: activeLink === 'inicio' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('inicio'); goHome();}}>Inicio</span>
          <span style={{ color: activeLink === 'equipo' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('equipo'); goEquipo();}}>Equipo</span>
          <span style={{ color: activeLink === 'pasos' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: `${window.innerWidth < 768 ? '3' : '2'}em` }} onClick={() => {changeActive('pasos'); goPasos()}}>Pasos</span>
        </Navbar.Brand>
          <Nav className="ml-auto col-sm-10 col-md-4 col-lg-4 d-flex justify-content-evenly">
        <span className="hide-on-md" style={{ color: "var(--color5)", marginRight: "1em", paddingTop: "0.5em" }}>{usuarioPagina.email}</span>
        <Nav.Link style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => goLogout()}>Logout</Nav.Link>      
      </Nav>
    </Navbar>
     
)

  }else {
    return (
      <Navbar style={{ backgroundColor: "var(--color1)", position: "fixed", top: '0', width: "100%" }}>
        <Navbar.Brand className="col-sm-6 col-md-8 col-lg-9" >
          <span style={{ color: activeLink === 'inicio' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: "3em" }} onClick={() => {changeActive('inicio'); goHome();}}>Inicio</span>
          <span style={{ color: activeLink === 'equipo' ? '#b78700' : "var(--color5)", cursor: "pointer", marginLeft: "3em" }} onClick={() => {changeActive('equipo'); goEquipo();}}>Equipo</span>
        </Navbar.Brand>
        <Nav className="ml-auto col-sm-2 col-md-4 col-lg-3 d-flex justify-content-evenly">
          <Nav.Link  className="mr-3" style={{ color: activeLink === 'register' ? '#b78700' : "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => {changeActive('register'); goRegister()}}>Registrarse</Nav.Link>
          <Nav.Link  style={{ color: activeLink === 'login' ? '#b78700' : "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => {changeActive('login'); goLogin()}}>Login</Nav.Link>      
        </Nav>
      </Navbar>
    );
  }
}
