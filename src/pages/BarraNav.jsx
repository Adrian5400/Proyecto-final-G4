import React from "react";
import './css/home.css';

import { Navbar, Nav } from 'react-bootstrap';

function BarraNav() {
    return (
       <div className="mt-5">
            <Navbar style={{ backgroundColor: "var(--color1)" }}>
                <Navbar.Brand style={{ color: "var(--color5)" }}>Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link className="mr-3" style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px", marginRight: "2px" }}>Registrarse</Nav.Link>
                    <Nav.Link style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px", marginLeft: "2px" }}>Login</Nav.Link>
                </Nav>
            </Navbar>
            </div>
    );
}

export default BarraNav;
