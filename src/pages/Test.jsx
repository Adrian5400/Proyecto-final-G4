import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ModeloLoader from './../components/ModeloLoader';
import Test2 from './../components/Test2';
import { Modal } from "react-bootstrap";

export default function Test(){
const [herramientas, setHerramientas] = useState([]);

const extension = (imagenUrl) => {
    let loDelFinal = imagenUrl.split('.').pop().toLowerCase();
if (loDelFinal==="fbx") {
    return true;
}else{
return false;
    }
}

    useEffect(() => {

        const obtenerHerramientas = async () => {
            const datos = await fetch('http://127.0.0.1:8000/api/herramientas');
            const cartas = await datos.json();
            console.log(cartas);
            setHerramientas(cartas);
        };
        obtenerHerramientas();
      
    }, []);
    
    
    
    if(herramientas.length > 0){
    return (
        <div style={{height: "85vh", overflow: 'scroll'}}>
    {herramientas.map(element => {
        if(extension(element.image_url)){
            console.log(element.nombre);
          return <Test2 modelo={element.modelo}></Test2>
        }else{
            return <img src={element.image_url} />
        }})}

        </div>
    );
    }else{
        return 'loading';
    }

}