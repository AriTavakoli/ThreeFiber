import React from 'react';
import { Canvas ,useLoader} from "@react-three/fiber";
import { Stage, Environment, PerspectiveCamera, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, softShadows, BakeShadows, useHelper, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Suspense } from "react";
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect, useMemo } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import {useFrame } from '@react-three/fiber'



export default function Random({ color = 0x888888 }) {
  // Create a reference to the points object
  const points = useRef();

  // Use a memo to create the geometry and material only once
  const geometry = useMemo(() => {
    const vertices = [];

    for ( let i = 0; i < 10000; i ++ ) {
      const x = THREE.MathUtils.randFloatSpread( 2000 );
      const y = THREE.MathUtils.randFloatSpread( 2000 );
      const z = THREE.MathUtils.randFloatSpread( 2000 );
      vertices.push( x, y, z );
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    return geometry;
  }, []);

  const material = useMemo(() => new THREE.PointsMaterial({ color }), [color]);

  // Use the useFrame hook to animate the points over time

  return (
    <points ref={points} geometry={geometry} material={material} />
  );
}

