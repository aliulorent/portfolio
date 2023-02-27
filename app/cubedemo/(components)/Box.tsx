import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber";

function Box(props: any) {
    const boxRef = useRef<any>();
    useFrame(()=>{
        boxRef.current.rotation.y += 0.01;
        boxRef.current.rotation.x += 0.01;
        boxRef.current.rotation.z += 0.01;
    });
    return (
        <mesh ref={boxRef} {...props}  recieveShadow={true} castShadow={true}>
        <boxBufferGeometry />
        <meshPhysicalMaterial  color={"green"} />
        </mesh>
  );
}
export default Box;

