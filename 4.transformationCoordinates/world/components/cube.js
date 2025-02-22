import { BoxBufferGeometry } from 'https://cdn.skypack.dev/three@0.132.2';
import { MeshStandardMaterial } from 'https://cdn.skypack.dev/three@0.132.2';
import { MeshBasicMaterial } from 'https://cdn.skypack.dev/three@0.132.2';
import { Mesh } from 'https://cdn.skypack.dev/three@0.132.2';

export function createCube() {
    // mesh cube with wireframe to see details
    const geometry = new BoxBufferGeometry(4 ,4, 4, 4, 4, 4);
    const material = new MeshStandardMaterial({ color: 0x000000 });
    
    const mycube = new Mesh(geometry, material);

    return mycube;    
}

export function createBasicCube() {

    const geometry = new BoxBufferGeometry(4 ,4, 4, 4, 4, 4);

    const material = new MeshBasicMaterial({ color: 0x555555 });

    const mycube = new Mesh(geometry, material);

    return mycube;  

}
