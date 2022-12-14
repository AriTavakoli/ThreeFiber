// take a jpg image and convert it to a particle system component with react three fiber and three js



// import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import React, { useRef, useEffect,useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';
import { useLoader } from '@react-three/fiber';





export default function ParticleV3() {

  // load a gltf model using useLoader then loop through the mesh and turn it into a point cloud
  const gltf = useLoader(GLTFLoader, 'models/gltf/car.glb');

  useLayoutEffect(() => {
    gltf.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    applyProps(materials.default, {
      color: 'orange',
      roughness: 0,
      normalMap: new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping),
      'normalMap-repeat': [40, 40],
      normalScale: [0.05, 0.05]
    })
  })
  return <primitive object={gltf} {...props} />
}

