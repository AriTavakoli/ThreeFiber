//write a component that takes in a gltf and then it adds a particle system to the shape of the object

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

export default function ParticleV3(props) {
  const mesh = useRef();
  const particleCount = 30000;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const speeds = new Float32Array(particleCount);
  const colors = new Float32Array(particleCount * 3);
  const color = new THREE.Color();
  const { color: colorControl } = useControls('particle', {
    color: 'blue',
  });
  // const { nodes } = useGLTF('/scene.gltf');
  // const texture = useTexture('/texture.jpg');
 
  const [gltf] = useLoader(GLTFLoader, 'models/gtlf/car.glb');

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = Math.random() * 20 - 10;
    positions[i * 3 + 1] = Math.random() * 20 - 10;
    positions[i * 3 + 2] = Math.random() * 20 - 10;
    speeds[i] = Math.random() * 0.1;
    color.set(colorControl);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
  });

  useFrame(() =>
    mesh.current.rotation.set(
      mesh.current.rotation.x + 0.01,
      mesh.current.rotation.y + 0.01,
      mesh.current.rotation.z + 0.01
    )
  );

  return (
    <group ref={mesh} {...props}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
      <points args={[particles, material]} {...props}>
        <pointsMaterial attach="material" size={0.1} vertexColors />
      </points>
    </group>
  );
}


