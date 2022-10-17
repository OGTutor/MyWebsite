import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./model";

const Model3D = () => {
    return (
        <div className="canvas-element">
            <Canvas
                className="web-gl"
                camera={{ position: [320, -70, 60], zoom: 4 }}
            >
                <OrbitControls />
                <hemisphereLight intensity={0.1} />
                <spotLight
                    position={[50, 600, 100]}
                    angle={0.3}
                    penumbra={1}
                    intensity={4}
                    color={0xeeeeee}
                    castShadow
                />
                <spotLight
                    position={[200, 110, 150]}
                    angle={0.3}
                    penumbra={1}
                    intensity={3}
                    color={0xff0000}
                    castShadow
                />
                <spotLight
                    position={[-150, -110, -150]}
                    angle={0.3}
                    penumbra={1}
                    intensity={5}
                    color={0x7b68ee}
                    castShadow
                />
                <spotLight
                    position={[-200, -110, -150]}
                    angle={0.3}
                    penumbra={1}
                    intensity={4}
                    color={0x921e9a}
                    castShadow
                />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Model3D;
