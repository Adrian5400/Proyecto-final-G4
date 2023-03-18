import React from "react";
import ModeloLoader from "./ModeloLoader";
import { Buffer } from 'buffer';

export default function Test2({modelo}) {
  const [fbxUrl, setFbxUrl] = React.useState(null);

  React.useEffect(() => {
    // Retrieve the base64-encoded .fbx file from the database
    const base64String = modelo;
    // Decode the base64 string to obtain the original binary data of the .fbx file
   const binaryData = Buffer.from(base64String, 'base64');
   console.log(binaryData);
    // Create a URL object from the binary data using URL.createObjectURL()
    const url = URL.createObjectURL(
        new Blob([binaryData])    );
    setFbxUrl(url);

    // Clean up the URL object when the component unmounts
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return (
    <div>
      {fbxUrl ? <ModeloLoader path={fbxUrl} /> : <div>Loading...</div>}
    </div>
  );
}

