// create a particle system component with react three fiber and three js

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';

export default function Particle(props) {
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

  useFrame(() => {
    const positions = particles.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] -= speeds[i];
      if (positions[i * 3 + 1] < -10) {
        positions[i * 3 + 1] = 10;
      }
    }
    particles.attributes.position.needsUpdate = true;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <points ref={mesh} args={[particles, material]} {...props}>
      <pointsMaterial attach="material" size={0.1} vertexColors />
    </points>
  );
}


//



