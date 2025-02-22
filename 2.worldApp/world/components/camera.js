import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.132.2';

export function createCamera() {
    const fov = 35;
    const aspect = {};
    const near = 0.1;
    const far = 100;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    
    camera.position.set(0, 0, 10);

    return camera;
}