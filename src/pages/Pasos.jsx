import BarraNav from "./BarraNav";
import React from "react";
import "./css/pasos.css";
import Inicio from "./InicioPasos";

function Pasos() {
    return (
        <div className="mx-auto contenedor">
            <BarraNav />
            <div className="container">
                <div className="row">
                    <Inicio></Inicio>
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

export default Pasos;
