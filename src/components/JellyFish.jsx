import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';
import { useLoader } from '@react-three/fiber';


export default function JellyFish() {

  const gltf = useLoader(GLTFLoader, 'models/gltf/Jelly256.gltf');

  return (
    <group>
      <mesh
        geometry={gltf.scene.children[0].geometry}
        material={gltf.scene.children[0].material}
      />
    </group>
  );

}