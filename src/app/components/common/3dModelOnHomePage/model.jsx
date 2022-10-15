import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
    const group = useRef();

    const { nodes, materials, animations } = useGLTF(
        "/3D-Model-HomePage/scene.gltf"
    );

    useFrame((state, delta) => (group.current.rotation.y += 0.01));

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={5}
            position={[0, -145, 0]}
        >
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="9a5b6783ea6c4f0ba337c54977870eb3fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Cylinder002"
                                    position={[0.14, 2602.26, 0]}
                                    rotation={[-Math.PI / 2, 0, -0.42]}
                                    scale={388.08}
                                >
                                    <mesh
                                        name="Cylinder002_Material003_0"
                                        geometry={
                                            nodes.Cylinder002_Material003_0
                                                .geometry
                                        }
                                        material={materials["Material.003"]}
                                    />
                                    <mesh
                                        name="Cylinder002_Material002_0"
                                        geometry={
                                            nodes.Cylinder002_Material002_0
                                                .geometry
                                        }
                                        material={materials["Material.002"]}
                                    />
                                    <mesh
                                        name="Cylinder002_Material001_0"
                                        geometry={
                                            nodes.Cylinder002_Material001_0
                                                .geometry
                                        }
                                        material={materials["Material.001"]}
                                    />
                                </group>
                                <group
                                    name="Cylinder003"
                                    position={[0.46, 3389.75, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={388.08}
                                >
                                    <mesh
                                        name="Cylinder003_Material005_0"
                                        geometry={
                                            nodes.Cylinder003_Material005_0
                                                .geometry
                                        }
                                        material={materials["Material.005"]}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}
