import BarraNav from "./BarraNav";
import React from "react";
import Carta from "./CardTemporal";


function Pasos() {
    return (
        <div className="mx-auto contenedor min-vh-100">
            <BarraNav />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-4 text-center">
                        <div className="row">

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

export default Pasos;
