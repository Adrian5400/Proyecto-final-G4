import { Navbar, Nav } from 'react-bootstrap';
// import './../pages/css/home.css';
import { useNavigate } from 'react-router-dom';
export default function BarraNav() {
    const navigate = useNavigate();
    const goRegister = () => navigate("/register", { replace: true });
    const goLogin = () => navigate("/login", { replace: true });
    const goHome = () => navigate("/", { replace: true });
    
    return (

        
            <Navbar style={{ backgroundColor: "var(--color1)", position: "fixed", top: 0 }} >
                <Navbar.Brand style={{ color: "var(--color5)",  cursor: "pointer" }} onClick={()=>goHome()}>Inicio</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link className="mr-3" style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px", marginRight: "2px" }} onClick={()=>goRegister()}>Registrarse</Nav.Link>
                    <Nav.Link style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px", marginLeft: "2px" }} onClick={()=>goLogin()}>Login</Nav.Link>
                </Nav>
            </Navbar>
      
    );
    }
