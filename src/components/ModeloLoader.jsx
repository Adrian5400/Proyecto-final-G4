
import "./css/styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";
import { AmbientLight, DirectionalLight } from 'three';

const Scene = (props) => {
  const fbx = useFBX(props.url);

  return <primitive object={fbx} scale={0.005} />;
};

export default function ModeloLoader({ url }) {
  return (
    <div className="App">
     <Canvas gl={{ width: 500, height: 500 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <Suspense fallback={null}>
          <Scene url={url} />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}