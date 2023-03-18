import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three-stdlib'

export default function ModeloLoader({ path }) {
  console.log(path);
  const fileName = path.split('/').pop() // extract file name from path
  const url = `${path}#${fileName}` // append file name to blob URL
  console.log(url)
  return (
    <div style={{height: "50vh", width: "50vw"}}>
    <Canvas camera={{ position: [0, 0, 13], fov: 50 }} style={{backgroundColor: "white"}}>
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <Model position-y={0} scale={[0.2, 0.2, 0.2]} url={url} />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
    </div>
  )
}

function Model({ url, ...props }) {
  const scene = useLoader(FBXLoader, url)
  return <primitive object={scene} {...props} />
}
