import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

const Model = (props) => {
    const ref = useRef("");

    useFrame((state, delta) => (ref.current.rotation.x += 0.1));

    return (
        <mesh {...props} ref={ref} scale={0.4}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial>
                <GradientTexture
                    stops={[0, 1]}
                    colors={["#00b3ff", "#fff"]}
                    size={1024}
                />
            </meshBasicMaterial>
        </mesh>
    );
};

export default Model;
