import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.132.2';

export function createRenderer() {
    // renderer
    const renderer = new WebGLRenderer();
    
    return renderer;
}