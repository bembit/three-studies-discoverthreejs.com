import { DirectionalLight } from 'https://cdn.skypack.dev/three@0.132.2';

import { AmbientLight } from 'https://cdn.skypack.dev/three@0.132.2';

import { SpotLight } from 'https://cdn.skypack.dev/three@0.132.2';

function createDirectionalLight() {

    const light = new DirectionalLight(0xffffff, 15);

    // right up towards us
    light.position.set(10, 10, 10);

    return light;
}

function createAmbientLight() {

    const ambientLight = new AmbientLight(0xff00000, 25);

    ambientLight.position.set(5, 0, 5);

    return ambientLight;
}

function createSpotLight() {
    const spotLight = new SpotLight(0x07dae2, 8);

    spotLight.position.set(5, 0, 5);

    return spotLight;

}

export { createDirectionalLight, createAmbientLight, createSpotLight };