import { OrbitControls, Box, useVideoTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './Model'
import { useState } from "react";
import { TextureLoader } from "three";
import * as THREE from 'three';


export default function Experience() {

    function WallVideo() {
        const [pause, setPause] = useState(false);
        const width = 7.5;
        const height = 4;
        const depth = 0.1;
        const props = {
            unsuspend: "canplay",
            muted: true,
            loop: true,
            start: pause,
        };
        const texture = useVideoTexture("/static/shempions.mp4", props)
        const playVideo = () => {
            setPause(true);
        };

        return (
            <Box args={[width, height, depth]} onClick={playVideo}>
                <meshStandardMaterial map={texture} />
            </Box>
        );
    }

    function WallImage() {
        const [texture, setTexture] = useState(new TextureLoader().load("/static/msn.jpg"));
        const material = new THREE.MeshStandardMaterial({
            map: texture,
        });
        const width = 7.5;
        const height = 4;
        const depth = 0.1;

        const handleClick = () => {
            const newTexture = new TextureLoader().load("/static/msn2.jpg");
            setTexture(newTexture);
        };

        return (
            <Box args={[width, height, depth]} material={material} onDoubleClick={handleClick}/>
        );
    }

    return <>
        <Perf />
        <OrbitControls />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Model />

        {<mesh position-x={-3.7} position-y={2} rotation-y={- Math.PI * 0.5} scale={1}>
            <WallVideo />
        </mesh>}

        {<mesh position-z={-3.5} position-y={2} rotation-y={- Math.PI * 1} scale={1}>
            <WallImage />
        </mesh>}

    
    </>
}