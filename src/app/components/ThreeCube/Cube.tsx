import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
interface ICube{
  position:  any,
  color: string,
}

export default function Cube({color, position}:ICube) {

  const ref = useRef<any>(null)

  useFrame((state, delta)=>{
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 1.0
  })

  return (
    <mesh position={position} ref={ref}scale={1.4} >
      <sphereGeometry args={[2, 40,40]}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  );
}
