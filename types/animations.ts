import { AnimationType } from './types'; // Assuming there's a types file for shared types

export const animationTypes: AnimationType[] = [
  {
    name: 'fadeIn', // Fade in effect
    duration: '0.5s',
    timingFunction: 'ease-in',
  },
  {
    name: 'slideIn', // Slide in effect
    duration: '0.7s',
    timingFunction: 'ease-out',
  },
  {
    name: 'bounce', // Bounce effect
    duration: '1s',
    timingFunction: 'ease-in-out',
  },
  {
    name: 'zoomIn', // Zoom in effect
    duration: '0.6s',
    timingFunction: 'ease-in',
  },
  {
    name: 'rotate', // Rotate effect
    duration: '0.8s',
    timingFunction: 'linear',
  },
];

export default animationTypes;