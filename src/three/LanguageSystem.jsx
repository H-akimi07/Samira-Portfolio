import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";

function LanguageNode({ position, scale = 0.1 }) {
  return (
    <Sphere args={[scale, 24, 24]} position={position}>
      <meshStandardMaterial
        color="#FCA311"
        emissive="#FCA311"
        emissiveIntensity={0.7}
        metalness={0.7}
        roughness={0.25}
      />
    </Sphere>
  );
}

function LanguageSystem() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.3;
      coreRef.current.rotation.x = Math.sin(time * 0.35) * 0.1;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.18;
      ringRef.current.rotation.x = Math.sin(time * 0.25) * 0.12;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.35}>
      <group>
        {/* Central translation core */}
        <Sphere ref={coreRef} args={[0.58, 48, 48]}>
          <meshStandardMaterial
            color="#14213D"
            metalness={0.85}
            roughness={0.2}
          />
        </Sphere>

        {/* Inner language signal */}
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.45}
            metalness={0.75}
            roughness={0.2}
          />
        </Sphere>

        {/* Translation orbit */}
        <Torus
          ref={ringRef}
          args={[0.9, 0.015, 12, 96]}
          rotation={[Math.PI / 2.5, 0, 0]}
        >
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.65}
            metalness={0.8}
            roughness={0.25}
          />
        </Torus>

        {/* Secondary orbit */}
        <Torus args={[1.18, 0.008, 10, 96]} rotation={[Math.PI / 2, 0.5, 0]}>
          <meshStandardMaterial
            color="#E5E5E5"
            transparent
            opacity={0.3}
            metalness={0.5}
            roughness={0.4}
          />
        </Torus>

        {/* Language nodes */}
        <LanguageNode position={[1.15, 0.15, 0]} />
        <LanguageNode position={[-1.15, -0.15, 0]} />

        <LanguageNode position={[0, 1.05, 0.15]} />
        <LanguageNode position={[0, -1.05, -0.15]} />

        <LanguageNode position={[0.75, 0, 0.75]} />
        <LanguageNode position={[-0.75, 0, -0.75]} />
      </group>
    </Float>
  );
}

export default LanguageSystem;
