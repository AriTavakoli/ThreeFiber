
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { editable as e, SheetProvider } from "@theatre/r3f";


export default function Model(props) {
  const { nodes, materials } = useGLTF("models/gltf/car.glb");
  return (
    <e.group theatreKey='car'{...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["temir]"]}
        position={[0.07, 0.98, -2.82]}
        rotation={[1.74, 0, -Math.PI]}
        scale={0.08}
      />
      <group
        position={[1.05, 0.43, 2.11]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.74, 0.75, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_3.geometry}
          material={materials["temir]"]}
        />
      </group>
      <group
        position={[1.05, 0.45, -1.57]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.74, 0.75, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane000_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane000_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane000_3.geometry}
          material={materials["temir]"]}
        />
      </group>
      <group
        position={[-1.02, 0.45, -1.57]}
        rotation={[0, 1.57, 0]}
        scale={[0.74, 0.75, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["temir]"]}
        />
      </group>
      <group
        position={[-1.02, 0.43, 2.11]}
        rotation={[0, 1.57, 0]}
        scale={[0.74, 0.75, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_3.geometry}
          material={materials["temir]"]}
        />
      </group>
      <group
        position={[0.02, 1, 0.82]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.74, 0.75, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials["temir]"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_4.geometry}
          material={materials.nomer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_5.geometry}
          material={materials.tereze}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_6.geometry}
          material={materials.farb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_7.geometry}
          material={materials["Material.005"]}
        />
      </group>
    </e.group>
  );
}

useGLTF.preload("models/gltf/car.glb");
