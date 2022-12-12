import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TransformControls, Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Suspense } from "react";
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { Perf } from 'r3f-perf'
import extension from '@theatre/r3f/dist/extension'
import { getProject, core } from '@theatre/core'
import { editable as e, SheetProvider } from '@theatre/r3f'
import { useFrame } from '@react-three/fiber'
import state from '@src/Animation/state2.json'
import { PerspectiveCamera } from '@react-three/fiber'


import studio from '@theatre/studio'

const mode = 'development1'
//
if (mode === 'development') {

  studio.extend(extension)
} else {

}
studio.initialize()

const demoSheet = getProject('Demo Project', { state: state }).sheet('Demo Sheet')
const practiceAnimation = getProject('Animation').sheet('Practice Animation')







function Box(props) {
  const boxRef = useRef()

  useFrame(() => {
    boxRef.current.rotation.x += 0.01
    boxRef.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={boxRef} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>

  )
}


function App() {

  const lightRef = useRef()
  const boxRef = useRef()

  useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 5] }))
  }, [])





  return (

    <Canvas style={{ height: '100vh', width: '100vw' }} camera={{
      position: [0, 0, 5],
      fov: 50,
      near: 0.1,
      far: 1000
    }}>
      <OrbitControls />

      <Perf position="bottom-left" />

      <SheetProvider sheet={demoSheet}>
        <ambientLight />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />

        <Box onClick = {() => {
          demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 5] })
        }}></Box>

        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} color='black'>
          <planeBufferGeometry args={[1, 1, 1]} color='black' />
          <meshStandardMaterial color='black' />
        </mesh>




        {/* <e.Model theatreKey="Car" position={[0, 0, 0]} /> */}
        <e.mesh theatreKey="Cube">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </e.mesh>
      </SheetProvider>
    </Canvas>

  );
}

export default App;