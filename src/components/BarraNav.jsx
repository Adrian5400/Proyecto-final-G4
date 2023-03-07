import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Contexto } from './../App';

export default function BarraNav() {
  const navigate = useNavigate();
 const { usuarioPagina } = useContext(Contexto);
  const goRegister = () => navigate("/register", { replace: true });
  const goLogin = () => navigate("/login", { replace: true });
  const goHome = () => navigate("/", { replace: true });

  return (
    <Navbar style={{ backgroundColor: "var(--color1)", position: "fixed", top: 0, width: "100%" }}>
      <Navbar.Brand className="col-sm-6 col-md-8 col-lg-9" >
        <span style={{ color: "var(--color5)", cursor: "pointer", marginLeft: "3em" }} onClick={() => goHome()}>Inicio</span>
      </Navbar.Brand>
      <Nav className="ml-auto col-sm-6 col-md-4 col-lg-3 d-flex justify-content-evenly">
        <Nav.Link className="mr-3" style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => goRegister()}>Registrarse</Nav.Link>
        <Nav.Link style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px" }} onClick={() => goLogin()}>Login</Nav.Link>
      </Nav>
    </Navbar>
  );
}
