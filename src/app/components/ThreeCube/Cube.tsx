import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

interface ICube {
  position: [number, number, number],
  color: string,
}

export default function Cube({ color, position }: ICube) {
  
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta ;
      ref.current.rotation.y += delta * 1.0;
    }
  });

  return (
    <mesh position={position} ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[2.3, 18, 244]} />
      <meshPhongMaterial />
    </mesh>
  );
}
