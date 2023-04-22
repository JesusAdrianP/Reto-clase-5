import { useGLTF } from "@react-three/drei";


export default function Model() {
    const { nodes, materials } = useGLTF("/static/champions.glb")
    
    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0_1.geometry}
                material={nodes.mesh_0_1.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0_2.geometry}
                material={nodes.mesh_0_2.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.handol_Plane.geometry}
                material={nodes.handol_Plane.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.UEFA_Logo_Curve005.geometry}
                material={nodes.UEFA_Logo_Curve005.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.COUPE_DES_CLUBS_CHAMPIONS_EUROPÉENS_Text006.geometry}
                material={nodes.COUPE_DES_CLUBS_CHAMPIONS_EUROPÉENS_Text006.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ground_Plane001.geometry}
                material={nodes.ground_Plane001.material}
            />
        </group>
    )
}

useGLTF.preload("/static/champions.glb")