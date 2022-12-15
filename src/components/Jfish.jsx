import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Jfish(props) {
  const pointCloud = useLoader(GLTFLoader, 'models/gltf/car.glb' );

  return (
    <mesh>
      <points geometry={pointCloud} />
    </mesh>
  );
}
