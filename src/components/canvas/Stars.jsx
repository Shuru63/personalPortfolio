import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Generate stars with better distribution across the entire view
const generateStars = () => {
  const positions = new Float32Array(2000 * 3);
  
  for (let i = 0; i < 2000; i++) {
    // Create multiple layers of stars at different distances
    const layer = Math.floor(i / 400); // 5 layers of 400 stars each
    const baseRadius = 5 + layer * 8; // Start at 5, go up to 37
    
    // Add some randomness to the radius for natural distribution
    const radius = baseRadius + Math.random() * 10;
    
    // Spherical coordinates for even distribution
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
};

// Generate colors for variety
const generateColors = () => {
  const colors = new Float32Array(2000 * 3);
  const starColors = [
    [1.0, 1.0, 1.0],     // White
    [0.95, 0.45, 0.62],  // Pink
    [0.42, 0.55, 1.0],   // Blue  
    [1.0, 0.92, 0.23],   // Yellow
    [1.0, 0.6, 0.0],     // Orange
    [0.8, 0.9, 1.0],     // Light blue
  ];
  
  for (let i = 0; i < 2000; i++) {
    const colorIndex = Math.floor(Math.random() * starColors.length);
    const color = starColors[colorIndex];
    
    colors[i * 3] = color[0];
    colors[i * 3 + 1] = color[1];
    colors[i * 3 + 2] = color[2];
  }
  return colors;
};

// Generate varying sizes
const generateSizes = () => {
  const sizes = new Float32Array(2000);
  for (let i = 0; i < 2000; i++) {
    sizes[i] = Math.random() * 3 + 0.5; // Size between 0.5 and 3.5
  }
  return sizes;
};

const Stars = (props) => {
  const ref = useRef();
  const positions = useMemo(() => generateStars(), []);
  const colors = useMemo(() => generateColors(), []);
  const sizes = useMemo(() => generateSizes(), []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Very slow rotation for subtle movement
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 75;
      ref.current.rotation.z -= delta / 100;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // Additive blending for glow effect
          opacity={0.6}
        />
        {/* Add the color and size attributes */}
        <bufferAttribute
          attach="geometry-attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="geometry-attributes-size"
          args={[sizes, 1]}
        />
      </Points>
    </group>
  );
};

// Background stars layer (far away, smaller)
const BackgroundStars = () => {
  const ref = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      const radius = 100 + Math.random() * 200; // Very far away
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 200;
      ref.current.rotation.y -= delta / 300;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.001}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

// Foreground stars (closer, larger, more prominent)
const ForegroundStars = () => {
  const ref = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      const radius = 2 + Math.random() * 8; // Close to camera
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={2}
        opacity={0.6}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
      background: 'radial-gradient(ellipse at center, #0f0f23 0%, #000000 70%, #000000 100%)'
    }}>
      <Canvas
        camera={{ 
          position: [0, 0, 0],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <React.Suspense fallback={null}>
          <BackgroundStars />
          <Stars />
          <ForegroundStars />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;