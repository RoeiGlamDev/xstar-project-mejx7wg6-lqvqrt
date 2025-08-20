import { useEffect, useRef } from 'react';

const use3D = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('webgl');
    if (!context) return;

    // Initialize 3D scene
    const initScene = () => {
      // Set clear color to pink
      context.clearColor(1.0, 0.75, 0.8, 1.0);
      context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);
      
      // Additional 3D setup code goes here
    };

    initScene();

    // Cleanup on component unmount
    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return { canvasRef };
};

export default use3D;