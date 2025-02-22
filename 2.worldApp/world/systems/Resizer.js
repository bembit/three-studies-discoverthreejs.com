
export class Resizer{
    constructor(container, camera, renderer) {
        camera.aspect = container.clientWidth / container.clientHeight;

        camera.updateProjectionMatrix();

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    someMethod() {
        //    
    }

}
