import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Stage, Environment, PerspectiveCamera, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, softShadows, BakeShadows, useHelper, OrbitControls } from '@react-three/drei'
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
import carState from '@src/Animation/carState.json'
import Model from '@src/components/Model.jsx'
import { useControls } from 'leva'
import { useThree } from '@react-three/fiber'
import { Bloom, Noise, Glitch, Vignette, EffectComposer } from '@react-three/postprocessing'

import Particle from '@src/components/Particle.jsx'
import ParticleV2 from '@src/components/ParticleV2.jsx'
import ParticleV3 from '@src/components/ParticleV3.jsx'

import studio from '@theatre/studio'

const mode = 'development'
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
    <e.mesh {...props} ref={boxRef} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </e.mesh>

  )
}


function App() {

  //helpers
  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] }
  })

  const { cameraPosition } = useControls('camera', {
    "cameraPosition": [-3.6799999999999895, 4.739999999999986, 17.219999999999914]
  })

  const { lightPosition } = useControls('light', {
    "lightPosition": [10, 10, 10]
  })



  const lightRef = useRef()
  const boxRef = useRef()

  useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 5] }))
  }, [])


  const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera')

  //const myObject = practiceAnimation.object('car' , {foo: 'bar'})
  //  .log(myObject, 'myObject')


  return (

    <Canvas style={{ height: '100vh', width: '100vw' }}>


      <color args={['#000000']} attach="background" />


      <Suspense fallback={null}>
        {/* <Sky sunPosition={sunPosition}
          turbidity={10}
          rayleigh={2}
          mieCoefficient={0.005}
          mieDirectionalG={0.8}
          luminance={0}
          inclination={0.49}

        /> */}
        {/* <Particle></Particle> */}
        {/* <ParticleV2></ParticleV2> */}
        <ParticleV3></ParticleV3>
        <OrbitControls />
        <EffectComposer multisampling={4}>
          {/* ... */}
          <Bloom
            mipmapBlur
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            height={300}
            // blendFunction={BlendFunction.COLOR_DODGE}
            // blendFunction={BlendFunction.SCREEN}

            // kernelSize={BloomKernelSize.LARGE}

            intensity={0.5}






          />
        </EffectComposer>
        <Perf position="bottom-left" />

        <SheetProvider sheet={demoSheet}>
          <EditableCamera theatreKey="Camera" makeDefault position={[-3.6799999999999895, 4.739999999999986, 17.219999999999914]} fov={75} />
          {/* <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75} /> */}

          <ambientLight />
          <e.directionalLight theatreKey='light2' ref={lightRef} position={lightPosition} castShadow />
          {/* <PerspectiveCamera theatreKey="camera1" makeDefault position={cameraPosition} /> */}

          <e.pointLight theatreKey="Light" position={[10, 10, 10]} />



          {/* <Box theatreKey='box' onClick={() => {
            demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 5] })
          }}></Box> */}

          {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} color='black'>
            <planeBufferGeometry args={[20, 20, 20]} color='black' />
            <meshStandardMaterial color='black' />
          </mesh> */}


          {/* <e.Model theatreKey="Car" position={[0, 0, 0]} /> */}
          <e.mesh theatreKey="Cube">
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" emissive="orange" toneMapped={false} />
          </e.mesh>
        </SheetProvider>

        <SheetProvider sheet={practiceAnimation}>
          {/* <Model onClick={() => {
            practiceAnimation.sequence.play({ iterationCount: Infinity, range: [0, 5] })
          }}
            position={[0, 0, 0]} /> */}
        </SheetProvider>
      </Suspense>
    </Canvas>

  );
}

export default App;