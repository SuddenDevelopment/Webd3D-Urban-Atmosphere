/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -p 6 -i -s urban.glb 
Files: urban.glb [482.11MB] > C:\Users\Admin\Documents\Web3D\react-three-vite-main\public\urban-transformed.glb [5.88MB] (99%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged, PerspectiveCamera } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/urban-transformed.glb')
  const instances = useMemo(
    () => ({
      Metalwindow: nodes.metal_window_4005,
    }),
    [nodes],
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  const { nodes, materials } = useGLTF('/urban-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={22.895194} position={[-8.109861, 6.933086, 10.495182]} rotation={[0.245229, -0.817524, 0.18057]} />
      <pointLight intensity={54351.413066} decay={2} position={[5.757117, 1.316202, 9.481516]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['big building']} position={[1.735801, 7.173697, 1.401592]} />
      <mesh castShadow receiveShadow geometry={nodes.Metal_Door_Metal_Door002.geometry} material={materials['metal door']} position={[0.671832, 9.520066, 0.615048]} rotation={[Math.PI / 2, 0, 0]} scale={0.73961} />
      <mesh castShadow receiveShadow geometry={nodes.drone.geometry} material={materials.drone} position={[15.185445, 10.127749, 1.637701]} />
      <mesh castShadow receiveShadow geometry={nodes.Defaultmaterial001_Defaultmaterial002.geometry} material={materials['Door.003']} position={[1.148036, 7.243165, 1.650739]} rotation={[0, 1.570535, 0]} scale={0.362699} />
      <mesh castShadow receiveShadow geometry={nodes.Plane020_Plane015.geometry} material={materials['metal plates']} position={[0.856421, 12.040092, -1.072135]} />
      <mesh castShadow receiveShadow geometry={nodes.Building_5007_Building_5008.geometry} material={materials['building 5']} position={[67.009888, 0, -10.013125]} rotation={[0, Math.PI / 4, 0]} scale={[53.418018, 53.418022, 24.391293]} />
      <mesh castShadow receiveShadow geometry={nodes.Ladder_Metalrust_Ladder_Metalrust001.geometry} material={materials.metalRust} position={[-2.284151, 9.090123, 1.3808]} scale={0.475772} />
      <instancedMesh args={[nodes.Cylinder002.geometry, materials.metal, 9]} castShadow receiveShadow instanceMatrix={nodes.Cylinder002.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder001.geometry, materials.metal, 33]} castShadow receiveShadow instanceMatrix={nodes.Cylinder001.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder006.geometry, materials['metal pipes variation 1'], 10]} castShadow receiveShadow instanceMatrix={nodes.Cylinder006.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder007.geometry, materials.metal, 6]} castShadow receiveShadow instanceMatrix={nodes.Cylinder007.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder008.geometry, materials['metal pipes variation 1'], 11]} castShadow receiveShadow instanceMatrix={nodes.Cylinder008.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder009.geometry, materials['metal pipes variation 3'], 6]} castShadow receiveShadow instanceMatrix={nodes.Cylinder009.instanceMatrix} />
      <instances.Metalwindow />
      <instancedMesh args={[nodes.metal_window_4005_1.geometry, materials['metal window 4 roughness'], 20]} castShadow receiveShadow instanceMatrix={nodes.metal_window_4005_1.instanceMatrix} />
      <instances.Metalwindow />
      <instancedMesh args={[nodes.metal_window_4001_1.geometry, materials['window light'], 11]} castShadow receiveShadow instanceMatrix={nodes.metal_window_4001_1.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/urban-transformed.glb')
