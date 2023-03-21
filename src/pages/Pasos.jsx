import React from "react";
import "./css/pasos.css";
import Inicio from "./InicioPasos";

function Pasos() {
    return (
        <div className="mx-auto contenedor" style={{height: '90vh', margin: '0 0 2em 0'}}>
            <div className="container">
                <div className="row">
                    <Inicio></Inicio>
                </div>
            </div>
        </div>
    

    );
}

export default Pasos;
