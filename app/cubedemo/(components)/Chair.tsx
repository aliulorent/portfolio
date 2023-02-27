import React, {useRef} from "react";
import {useFBX} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Chair() {
    const chairRef = useRef<any>(null);
    const fbx = useFBX("/3d-assets/plastic_monobloc_chair_01_4k.fbx");
    useFrame(()=>{
        chairRef.current.rotation.y += 0.01;
    });
    return (
        <primitive ref={chairRef} object={fbx} scale ={0.1} position = {[0, -3, 0]}></primitive>
  )
}

export default Chair