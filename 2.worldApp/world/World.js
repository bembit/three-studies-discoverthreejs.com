import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let scene;
let renderer;

export class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        
        container.append(renderer.domElement);
        
        const mycube = createCube();
        mycube.position.set(3, 0, 0);
        scene.add(mycube);

        const myOtherCube = createCube();
        myOtherCube.position.set(-3, 0, 0);
        scene.add(myOtherCube);

        const myOtherOthercube = createCube();
        myOtherOthercube.position.set(0, 0, -6);
        scene.add(myOtherOthercube);

        const resizer = new Resizer(container, camera, renderer);
    };

    render() {
        renderer.render(scene, camera);
    }
}
