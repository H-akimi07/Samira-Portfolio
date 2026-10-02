import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Torus, Sphere } from "@react-three/drei";

function LabCore() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.25;
      coreRef.current.rotation.x = Math.sin(time * 0.35) * 0.12;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.18;
      ringRef.current.rotation.x = Math.cos(time * 0.25) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5}>
      <group>
        {/* Core */}
        <Sphere ref={coreRef} args={[0.72, 64, 64]}>
          <meshStandardMaterial
            color="#14213D"
            metalness={0.8}
            roughness={0.22}
          />
        </Sphere>

        {/* Inner gold signal */}
        <Sphere args={[0.48, 48, 48]}>
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.35}
            metalness={0.7}
            roughness={0.25}
          />
        </Sphere>

        {/* Orbital ring */}
        <Torus
          ref={ringRef}
          args={[1.05, 0.018, 16, 128]}
          rotation={[Math.PI / 2.8, 0, 0]}
        >
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.8}
            metalness={0.8}
            roughness={0.25}
          />
        </Torus>

        {/* Second orbital structure */}
        <Torus args={[1.35, 0.008, 12, 128]} rotation={[Math.PI / 2, 0.5, 0]}>
          <meshStandardMaterial
            color="#E5E5E5"
            transparent
            opacity={0.35}
            metalness={0.5}
            roughness={0.4}
          />
        </Torus>
      </group>
    </Float>
  );
}

export default LabCore;
