import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
interface ICube{
  position:  any,
  color: string | undefined,
}

export default function Cube({color, position}:ICube) {

  const ref = useRef<any>(null)


  useFrame((state, delta)=>{
    ref.current.rotation.x += delta
  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
