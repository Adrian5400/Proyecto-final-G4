import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
function Home() {
  return (
<div className="mx-auto contenedor container min-vh-100">
      <Navbar style={{ backgroundColor: "var(--color1)" }}>
        <Navbar.Brand style={{ color: "var(--color5)" }}>Navbar</Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link className="mr-3" style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px", marginRight: "2px" }}>Registrarse</Nav.Link>
<Nav.Link style={{ color: "var(--color5)", border: "1px solid var(--color5)", borderRadius: "5px", padding: "5px 10px", marginLeft: "2px" }}>Login</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4 text-center">
            <h1 className="mt-3" style={{ color: "var(--color2)" }}>
              Lorem ipsum dolor sit amet consectetur Illo!
            </h1>
            <p style={{ color: "var(--color4)" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              perferendis laborum repellendus suscipit culpa ad aliquid expedita
              explicabo ipsam vero, libero voluptates in quibusdam architecto
              odio adipisci corrupti? Eum, sequi?
            </p>
            <div className="col-md-12 mt-4">
              <img src="http://via.placeholder.com/800x685" alt="imagen" />
            </div>
          </div>
        </div>
      </div>
   

      <footer className="mt-5" style={{ backgroundColor: "var(--color1)", maxWidth: "100vw", overflowX: "hidden" }}>
  <div className="row">
    <div className="col-md-12 text-center">
      <p className="mt-3" style={{ color: "var(--color5)" }}>
        Lorem ipsum dolor sit amet consectetur Illo!
      </p>
    </div>
  </div>
</footer>
</div>
  );
}


export default Home;
