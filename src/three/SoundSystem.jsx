import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";

function SoundNode({ position, scale = 0.07 }) {
  return (
    <Sphere args={[scale, 20, 20]} position={position}>
      <meshStandardMaterial
        color="#FCA311"
        emissive="#FCA311"
        emissiveIntensity={0.6}
        metalness={0.7}
        roughness={0.3}
      />
    </Sphere>
  );
}

function SoundSystem() {
  const ringsRef = useRef([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    ringsRef.current.forEach((ring, index) => {
      if (!ring) return;

      ring.rotation.z = time * (index % 2 === 0 ? 0.16 : -0.12);
      ring.rotation.x = Math.sin(time * 0.3 + index) * 0.08;
    });
  });

  const ringSizes = [0.42, 0.7, 0.98, 1.26];

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.3}>
      <group>
        {/* Central sound source */}
        <Sphere args={[0.23, 40, 40]}>
          <meshStandardMaterial
            color="#FCA311"
            emissive="#FCA311"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>

        {/* Expanding sound-wave rings */}
        {ringSizes.map((size, index) => (
          <Torus
            key={size}
            ref={(node) => {
              ringsRef.current[index] = node;
            }}
            args={[size, index === 0 ? 0.018 : 0.009, 10, 96]}
            rotation={[Math.PI / 2.8 + index * 0.12, index * 0.16, 0]}
          >
            <meshStandardMaterial
              color={index === 0 ? "#FCA311" : "#E5E5E5"}
              emissive={index === 0 ? "#FCA311" : "#14213D"}
              emissiveIntensity={index === 0 ? 0.45 : 0.15}
              transparent
              opacity={1 - index * 0.17}
              metalness={0.65}
              roughness={0.3}
            />
          </Torus>
        ))}

        {/* Orbiting music signals */}
        <SoundNode position={[1.35, 0.35, 0.1]} scale={0.09} />
        <SoundNode position={[-1.25, 0.45, -0.1]} scale={0.06} />
        <SoundNode position={[0.3, -1.3, 0.2]} scale={0.08} />
        <SoundNode position={[-0.45, 1.3, -0.2]} scale={0.07} />
        <SoundNode position={[0.95, -0.65, 0.45]} scale={0.05} />
        <SoundNode position={[-0.95, -0.55, 0.3]} scale={0.08} />
      </group>
    </Float>
  );
}

export default SoundSystem;
