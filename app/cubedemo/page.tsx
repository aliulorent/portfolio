"use client"
import React, {useRef, useState} from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./(components)/Box"
import Chair from './(components)/Chair';
import { Stats, OrbitControls, Environment, useFBX } from '@react-three/drei'
import "./three.css"

function CubeDemo() {

    const [cubeToggle, setCubeToggle] = useState(true);
    const handleClick = () => {
        setCubeToggle(!cubeToggle);
    }
    return (
    <>
        <div className="scene">
            <Canvas
            shadows={true}
            className="canvas"
            camera={{
                position: [-6, 7, 7],
            }}>
                <ambientLight color={"white"} intensity={0.2} />
                <pointLight position={[-2, 3, 3]}/>
                {(cubeToggle ? <Box scale={[3, 3, 3]}/> : <Chair/>) }
                <OrbitControls/>
                <Environment preset='forest' background blur={0.1}/>
                {/*<Stats className='absolute bottom-1 right-1'/>*/}
        </Canvas>
        <button className='absolute bottom-1 left-1 bg-blue-500 font-bold text-white p-3 m-5 rounded-md' onClick={handleClick}>Switch model to: {cubeToggle ? "chair" : "cube"}</button>
        </div>
    </>
  )
}

export default CubeDemo