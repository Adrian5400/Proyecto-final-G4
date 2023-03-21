import React from "react";
import ModeloLoader from "./ModeloLoader";
import { Buffer } from 'buffer';

export default function Decodificador({modelo}) {
  const [fbxUrl, setFbxUrl] = React.useState(null);

  React.useEffect(() => {
    // Saca el archivo codificado de la base de datos
    const base64String = modelo;
    // Lo desencripta, sacando el binario
   const binaryData = Buffer.from(base64String, 'base64');
   console.log(binaryData);
    // Crea un objeto 'url' a partir del binario
    const url = URL.createObjectURL(
        new Blob([binaryData])    );
    setFbxUrl(url);

    // Cuando cierra el componente, quita ese objeto url.
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);
//Al final de todo muestra 'loading' si todavia no acabo o pasa la url creada al componente que muestra los modelos.
  return (
    <div>
      {fbxUrl ? <ModeloLoader path={fbxUrl} /> : <div>Loading...</div>} 
    </div>
  );
}

