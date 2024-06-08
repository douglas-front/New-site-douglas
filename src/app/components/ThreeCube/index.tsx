"use client";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { sphereAnimation } from "./animations/sphereAnimation";
import * as THREE from 'three';
import Lights from "./Lights";
import { OrbitControls } from "@react-three/drei";

export default function ThreeCube() {
  

  useEffect(()=>{
    sphereAnimation();
   })
  return (
    <div className={`${styles.three} three`}>
      <Canvas>
        <Lights/>
        <Cube color="#FFFCF6" position={[0, 0, 0]}/>
        {/* <OrbitControls/> */}
        {/* <axesHelper args={[10]}/> */}
      </Canvas>
    </div>
  );
}
