import { Scene, Color } from 'https://cdn.skypack.dev/three@0.132.2';

export function createScene() {
    // scene
    const scene = new Scene();
    scene.background = new Color('black');

    return scene;
}