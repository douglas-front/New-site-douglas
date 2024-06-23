"use client";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { sphereAnimation } from "./animations/sphereAnimation";
import Lights from "./Lights";

export default function ThreeCube() {
  useEffect(() => {
    sphereAnimation();
  });
  return (
    <div className={`${styles.three} three`}>
      <Canvas>
        <Lights />
        <Cube  color="#FFFCF6" position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
