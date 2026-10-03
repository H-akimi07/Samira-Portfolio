import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MeetMindSystem from "./MeetMindSystem";
import LanguageSystem from "./LanguageSystem";

function ProjectVisual({ visualType }) {
  switch (visualType) {
    case "meeting-system":
      return <MeetMindSystem />;

    case "language-system":
      return <LanguageSystem />;

    case "sound-system":
      return null;

    case "planning-system":
      return null;

    default:
      return null;
  }
}

function ProjectScene({ projectId, visualType }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <pointLight position={[2, 2, 3]} intensity={2} />
        <pointLight position={[-2, -1, 2]} intensity={0.6} />

        <ProjectVisual visualType={visualType} projectId={projectId} />
      </Suspense>
    </Canvas>
  );
}

export default ProjectScene;
