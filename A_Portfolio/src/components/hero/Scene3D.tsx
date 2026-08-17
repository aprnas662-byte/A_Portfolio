import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function CyberRing() {
  const group = useRef<THREE.Group>(null);
  const particles = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pts = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.4 + Math.random() * 1.6;
      pts[i * 3] = Math.cos(angle) * radius;
      pts[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
      pts[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pts;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (group.current) {
      group.current.rotation.y = clock.elapsedTime * 0.22 + pointer.x * 0.28;
      group.current.rotation.x = pointer.y * 0.18;
    }
    if (particles.current) {
      particles.current.rotation.y = -clock.elapsedTime * 0.06;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.35}>
        <mesh>
          <torusGeometry args={[2.2, 0.035, 24, 160]} />
          <meshStandardMaterial color="#B8D8FF" emissive="#B8D8FF" emissiveIntensity={0.92} />
        </mesh>
        <mesh rotation={[Math.PI / 2.7, 0.35, 0]}>
          <torusGeometry args={[1.5, 0.025, 18, 130]} />
          <meshStandardMaterial color="#F4F1EA" emissive="#F4F1EA" emissiveIntensity={0.54} />
        </mesh>
        <points ref={particles}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial color="#BDF8DF" size={0.018} transparent opacity={0.5} />
        </points>
      </Float>
    </group>
  );
}

export function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.8]}>
      <color attach="background" args={['#030405']} />
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 2, 4]} intensity={2.2} color="#B8D8FF" />
      <pointLight position={[-4, -2, 2]} intensity={1.2} color="#F4F1EA" />
      <CyberRing />
      <Stars radius={65} depth={24} count={1600} factor={4} saturation={0} fade speed={0.6} />
    </Canvas>
  );
}
