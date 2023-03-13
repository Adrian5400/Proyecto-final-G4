import { Canvas } from 'react-three-fiber';
import { useLoader } from 'react-three-fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function ModeloLoader({ path }) {
const fbx = useLoader(FBXLoader, path);

  return <primitive object={fbx} />;
}

//PARA FUNCIONAR, DEBE ESTAR METIDO EN UN ELEMENTO <CANVAS></CANVAS>
//P.EJ <Canvas><ModeloLoader path={path} /></Canvas>