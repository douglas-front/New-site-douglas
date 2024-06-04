"use client"
import { Canvas } from "@react-three/fiber"
import Cube from "./Cube"
import styles from "./styles.module.scss"

export default function ThreeCube(){
  return(
   
      <Canvas>
        <directionalLight position={[2,2,2]}/>
        <ambientLight/>
        <Cube color="white" position={[2,0,0]}/>
      </Canvas>

  )
}