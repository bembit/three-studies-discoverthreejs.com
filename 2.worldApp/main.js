import { World } from './world/World.js';

function main() {
    const container = document.querySelector('#scene');

    const world = new World(container);

    world.render();
}

document.addEventListener("DOMContentLoaded", () => {
    const myBtn = document.querySelector("#btn");
    myBtn.addEventListener('click', (e) => {
        main();
    })
})
