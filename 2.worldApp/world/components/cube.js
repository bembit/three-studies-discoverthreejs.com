import { BoxBufferGeometry } from 'https://cdn.skypack.dev/three@0.132.2';
import { MeshBasicMaterial } from 'https://cdn.skypack.dev/three@0.132.2';
import { Mesh } from 'https://cdn.skypack.dev/three@0.132.2';

export function createCube() {
    // mesh cube with wireframe to see details
    const geometry = new BoxBufferGeometry(4 ,4, 4, 4, 4, 4);
    const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    
    const mycube = new Mesh(geometry, material);
    
    return mycube;    
}
