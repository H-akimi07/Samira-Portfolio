import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";

function SignalNode({ position, scale = 0.12 }) {
  return (
    <Sphere args={[scale, 24, 24]} position={position}>
      <meshStandardMaterial
        color="#FCA311"
        emissive="#FCA311"
        emissiveIntensity={0.8}
        metalness={0.7}
        roughness={0.25}
      />
    </Sphere>
  );
}

function MeetMindSystem() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.25;
      coreRef.current.rotation.x = Math.sin(time * 0.4) * 0.12;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.2;
      ringRef.current.rotation.x = Math.cos(time * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.35}>
      <group>
        {/* AI CORE */}
        <Sphere ref={coreRef} args={[0.65, 48, 48]}>
          <meshStandardMaterial
            color="#14213D"
            metalness={0.85}
            roughness={0.2}
          />
        </Sphere>

        {/* CORE SIGNAL */}
        <Sphere args={[0.36, 32, 32]}>
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.45}
            metalness={0.75}
            roughness={0.2}
          />
        </Sphere>

        {/* ORBIT 01 */}
        <Torus
          ref={ringRef}
          args={[0.95, 0.015, 12, 96]}
          rotation={[Math.PI / 2.5, 0, 0]}
        >
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.7}
            metalness={0.8}
            roughness={0.25}
          />
        </Torus>

        {/* ORBIT 02 */}
        <Torus args={[1.25, 0.008, 10, 96]} rotation={[Math.PI / 2, 0.6, 0]}>
          <meshStandardMaterial
            color="#E5E5E5"
            transparent
            opacity={0.3}
            metalness={0.5}
            roughness={0.4}
          />
        </Torus>

        {/* SIGNAL NODES */}
        <SignalNode position={[1.35, 0.2, 0]} />
        <SignalNode position={[-1.35, -0.2, 0]} />
        <SignalNode position={[0, 1.25, 0.2]} />
        <SignalNode position={[0, -1.25, -0.2]} />
        <SignalNode position={[0.9, 0, 0.95]} />
        <SignalNode position={[-0.9, 0, -0.95]} />
      </group>
    </Float>
  );
}

export default MeetMindSystem;
