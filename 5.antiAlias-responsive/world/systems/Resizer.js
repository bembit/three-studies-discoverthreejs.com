
const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
}

export class Resizer{
    constructor(container, camera, renderer) {
        setSize(container, camera, renderer);
    
        window.addEventListener("resize", () => {
            setSize(container, camera, renderer);
            console.log("asd")
            this.onResize();
        });
    }
    onResize() {
        // empty, customize from Worlds constrcutor
    }
}
