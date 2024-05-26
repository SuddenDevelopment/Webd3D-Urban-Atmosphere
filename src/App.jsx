import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Cloud, Clouds } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette, BrightnessContrast, Glitch } from '@react-three/postprocessing'
import * as THREE from 'three';
import {Model, Instances} from './model.jsx';
const App = () => {
  return (
    <>
    <Canvas camera={{ fov: 70, position: [0, 0, 3] }} gl={{ alpha: true }} style={{zIndex:1}}>
     <ambientLight intensity={0.1} />
      <Instances>
        <Model />
      </Instances>
      <Clouds frustumCulled={false}>
        <Cloud  position={[10,1,-10]} seed={42} scale={5} segments={20} volume={0.01} color={'#653'} speed={0.05} />
        <Cloud  position={[5,5,-5]} seed={13} scale={5} segments={15} volume={0.01} color={'#222'} speed={0.1} fade={1}/>
      </Clouds>
      <EffectComposer>
        <Bloom />
        <BrightnessContrast contrast={0.1} />
        <DepthOfField
          focusDistance={2} // where to focus
          focalLength={0.5} // focal length
          bokehScale={1} // bokeh size
        />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
    <div className="overlay">
      Web3D Tutorial <br/>
      Adding Atmosphere with<br/><br/>
      - Clouds <br/>
      - Post Processing Effects <br/>
      - Simple Animation  <br/>
      - Background <br/>
    </div>
    </>
  );
};

export default App;
