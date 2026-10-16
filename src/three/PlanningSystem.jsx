import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";

function TaskNode({ position, scale = 0.09 }) {
  return (
    <Sphere args={[scale, 20, 20]} position={position}>
      <meshStandardMaterial
        color="#FCA311"
        emissive="#FCA311"
        emissiveIntensity={0.5}
        metalness={0.7}
        roughness={0.3}
      />
    </Sphere>
  );
}

function PlanningSystem() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.18;
      coreRef.current.rotation.x = Math.sin(time * 0.25) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.12;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.25}>
      <group>
        {/* Central learning goal */}
        <Sphere ref={coreRef} args={[0.38, 40, 40]}>
          <meshStandardMaterial
            color="#14213D"
            metalness={0.85}
            roughness={0.2}
          />
        </Sphere>

        <Sphere args={[0.19, 32, 32]}>
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.5}
          />
        </Sphere>

        {/* Planning orbit */}
        <Torus
          ref={ringRef}
          args={[0.8, 0.012, 10, 96]}
          rotation={[Math.PI / 2.5, 0, 0]}
        >
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.5}
          />
        </Torus>

        <Torus args={[1.15, 0.007, 8, 96]} rotation={[0.7, 0.4, 0.2]}>
          <meshStandardMaterial color="#E5E5E5" transparent opacity={0.35} />
        </Torus>

        {/* Goal, task and progress nodes */}
        <TaskNode position={[0.8, 0.25, 0.1]} />
        <TaskNode position={[-0.8, -0.25, 0]} />
        <TaskNode position={[0, 1.05, 0.1]} scale={0.07} />
        <TaskNode position={[0, -1.05, -0.1]} scale={0.07} />
        <TaskNode position={[0.9, -0.65, 0.2]} scale={0.06} />
        <TaskNode position={[-0.9, 0.65, -0.2]} scale={0.06} />
      </group>
    </Float>
  );
}

export default PlanningSystem;
