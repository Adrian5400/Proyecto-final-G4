import React, { useState, useEffect } from 'react';

export default function PreparacionCirujia() {
    const [preparaciones, setPreparaciones] = useState([]);
    const [mostrarPrep, setMostrarPrep] = useState(1);
    
    React.useEffect(() => {
        async function getPreparaciones() {
            let lista = await fetch('http://127.0.0.1:8000/api/preparations');
            let listaJson = await lista.json();
            setPreparaciones(listaJson);
            console.log(listaJson);
        }
        getPreparaciones();
    }, []);



    const mostrarPaso = (index) => {
        if (preparaciones.length > 0) {
            return ( 
                <div style={{height:"50vh", color:"yellowgreen", backgroundColor: "grey", textAlign: "center"}}>
                <h4>{preparaciones[index].titulo}</h4>
                <h5>{preparaciones[index].desc}</h5>
                </div>
                    )
        } else {
            return <h3>Loading...</h3>
        }
        
    }

 
    return <div style={{height: '85vh'}}>{ preparaciones.length > 0 ? preparaciones.map(element => mostrarPaso(element.id - 1)) : <h3>Loading...</h3> } </div>

}