'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const InteractiveModel: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 1, 3);
        controls.enableDamping = true;

        const geometry = new THREE.BoxGeometry(1, 1, 1); // Placeholder geometry
        const material = new THREE.MeshStandardMaterial({ color: 0xffc0cb }); // Pink color
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (mountRef.current) {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh', backgroundColor: 'white' }} />; // Fullscreen container
};

export default InteractiveModel;