import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ParticleV2() {

  const gltf = useLoader(GLTFLoader, 'models/gltf/car.glb', (gltf => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        console.log(child);
        child.material.color = 'red';
        const geometry = child.geometry;
        child.material.color = 'red';
        child.material.emissive.set('red');
        child.material.color = 'red';

        const material = new THREE.PointsMaterial({
          color: 0xFFFFFF,
          size: 0.05,
          vertexColors: true,


        });

        const point = new THREE.Points(geometry, material);

        console.log(point)



      }

    })
  }







  ));






  let material = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 0.05,
    vertexColors: true,
  });

  mesh = new THREE.Points(gltf, material);


  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
    >
      <pointsMaterial
        attach="material"
        color="red"
        size={0.05}
        vertexColors={true}
      />
    </mesh>

  )



// loop through gltf child nodes and turn them into a point cloud directly

}
