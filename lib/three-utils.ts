import * as THREE from 'three'; // Importing Three.js library

// Utility function to create a scene
export const createScene = () => {
    const scene = new THREE.Scene(); // Creating a new scene
    scene.background = new THREE.Color(0xffffff); // Setting background color to white
    return scene;
};

// Utility function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Creating a perspective camera
    camera.position.z = 5; // Setting camera position
    return camera;
};

// Utility function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Creating a WebGL renderer
    renderer.setSize(width, height); // Setting renderer size
    return renderer;
};

// Utility function to add lighting
export const addLighting = (scene: THREE.Scene) => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Creating ambient light
    scene.add(ambientLight); // Adding ambient light to scene

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Creating directional light
    directionalLight.position.set(1, 1, 1).normalize(); // Setting light position
    scene.add(directionalLight); // Adding directional light to scene
};

// Utility function to create a cube
export const createCube = () => {
    const geometry = new THREE.BoxGeometry(); // Creating box geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Creating material with pink color
    const cube = new THREE.Mesh(geometry, material); // Creating mesh
    return cube; // Returning cube mesh
}; 

// Default export for easy import
export default {
    createScene,
    createCamera,
    createRenderer,
    addLighting,
    createCube,
};