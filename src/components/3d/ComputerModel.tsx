// src/components/3d/ComputerModel.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ComputerModel = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ComputerModel;