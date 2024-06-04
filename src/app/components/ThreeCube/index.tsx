"use client";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useEffect } from "react";
import { sphereAnimation } from "./animations/sphereAnimation";

export default function ThreeCube() {
  
  useEffect(()=>{
    sphereAnimation();
   })

  return (
    <div className={`${styles.three} three`}>

      <Canvas>
        <directionalLight position={[3, 2, 2]} intensity={1}/>
        <directionalLight color="purple" position={[0, 1, 5]} intensity={0.5}/>
        <ambientLight intensity={0.3}/>
        <Cube color="#FFFCF6" position={[0, 0, 0]}/>
      </Canvas>
    </div>
  );
}
