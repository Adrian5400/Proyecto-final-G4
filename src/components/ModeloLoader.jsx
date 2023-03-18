import "./css/styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";

const Scene = (props) => {
  const fbx = useFBX(props.url);

  return <primitive object={fbx} scale={0.005} />;
};

/* 
Esto tengo que cambiarle cosas que se ve regulero en las cards, 
pero funciona. Scene recibe la url como props y la pasa a useFBX, 
que es el que carga el modelo 3d.  */

export default function ModeloLoader({ url }) {
  return (
    <div className="App">
     <Canvas gl={{ width: 500, height: 500 }}>
        <Suspense fallback={null}>
          <Scene url={url} />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}



//PARA FUNCIONAR, DEBE ESTAR METIDO EN UN ELEMENTO <CANVAS></CANVAS>
//P.EJ <Canvas><ModeloLoader path={path} /></Canvas>