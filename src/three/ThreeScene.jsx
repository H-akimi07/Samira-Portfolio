import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LabCore from "./LabCore";

function ThreeScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />

        <pointLight position={[2, 2, 3]} intensity={2} />

        <LabCore />
      </Suspense>
    </Canvas>
  );
}

export default ThreeScene;
