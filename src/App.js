import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import {Room} from '@src/Room.js'


const Model = () => {
  const gltf = useLoader(GLTFLoader, "models/gltf/scene.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

function Box() {
  const ref = React.useRef();

  useFrame(() => {
    // Rotate the box each frame
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        <Environment
          preset="sunset"
          background
          fog={{ type: "linear", color: "white", near: 1, far: 5 }}
          controls={{ type: "orbit", enableDamping: true, dampingFactor: 0.1 }}
          onCreated={({ gl }) => gl.toneMapping = THREE.ACESFilmicToneMapping}
          onPointerMove={(e) => console.log(e.point)}
          camera=
          {{
            position: [0, 0, 2], fov: 50, near: 0.1, far: 1000,
          }}

        />


      </Suspense>
    </Canvas>
  );
}

export default App;