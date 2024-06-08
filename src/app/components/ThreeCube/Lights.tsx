export default function Lights(){
    return(
     <>
        <directionalLight position={[-3, 2, 2]} intensity={5}/>
        <directionalLight color="white" position={[0, 2, 5]} intensity={0.5}/>
        <directionalLight color="white" position={[2, 2, 5]} intensity={0.5}/>
        <ambientLight intensity={0.3}/>
     </>
    )
}