import { createCamera } from './components/camera.js';
import { createCube, createBasicCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createDirectionalLight, createAmbientLight, createSpotLight } from './components/lights.js';

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
        
        const light = createDirectionalLight();
        scene.add(light);

        const ambientLight = createAmbientLight();
        scene.add(ambientLight);

        const spotLight = createSpotLight();
        scene.add(spotLight);

        container.append(renderer.domElement);
        
        const mycube = createCube();
        mycube.position.set(3, 0, 0);
        mycube.rotation.set(-0.5, -0.3, 0.8);
        mycube.scale.set(0.3, 0.3, 0.3);
        scene.add(mycube);

        const myOtherCube = createCube();
        myOtherCube.position.set(-3, 0, 0);
        myOtherCube.rotation.set(-1.5, -0.5, 0);
        myOtherCube.scale.set(0.6, 0.6, 1.4);
        scene.add(myOtherCube);

        const myOtherOthercube = createCube();
        myOtherOthercube.position.set(0, 0, -6);
        myOtherOthercube.rotation.set(-0.5, -0.3, 0.8);
        scene.add(myOtherOthercube);

        const basicCube = createBasicCube();
        basicCube.position.set(3, 3, -3);
        basicCube.rotation.set(-0.8, -0.1, 0.8);
        basicCube.scale.set(0.5, 0.5, 0.5);
        scene.add(basicCube);


        const resizer = new Resizer(container, camera, renderer);
    };

    render() {
        renderer.render(scene, camera);
    }
}
