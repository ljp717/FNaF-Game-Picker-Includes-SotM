import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const gameNames = [
    "FNAF 1",
    "FNAF 2",
    "FNAF 3 Troll",
    "FNAF 3",
    "FNAF 4",
    "FNAF World Troll",
    "FNAF World",
    "FNAF World DLC",
    "SL Troll",
    "Sister Location",
    "SL Custom Night",
    "Pizza Sim",
    "UCN Troll",
    "UCN",
    "Help Wanted",
    "Dreadbear",
    "Freddy in Space 2",
    "Fury's Rage",
    "Security Breach",
    "Ruin",
    "Freddy in Space 3",
    "Help Wanted 2",
    "Into The Pit",
    "Five Laps at Freddy's"
];

const gameLogos = [
    "Five_Nights_at_Freddy's.svg.png",
    "405e0946bce7823f0d02492547b02fe8.png",
    "FNAF3troll.webp",
    "FNAF3.webp",
    "3ec1bf0f2f0d13b27cf4040f9cc64899.png",
    "fnafworldtroll.png",
    "c3d8ddeb02660e1a4a5fcac49fbf3bd3.png",
    "fnafworlddlc.png",
    "sltroll.webp",
    "FNAF_SL_LOGO.webp",
    "slcustomnight.webp",
    "FruitPunchClown.webp",
    "ucntroll.png",
    "UltimateCustomNight_Logo.png",
    "HelpWantedLogo.webp",
    "dreadbear.webp",
    "Freddy_in_Space_2.webp",
    "41c4601149dbd30948a810b8a7843284.png",
    "SBLogo_LogoWithText.webp",
    "Ruin_logo.webp",
    "fis3.webp",
    "HelpWanted2Logo.webp",
    "FiveNightsAtFreddys_IntoThePit_Logo.png",
    "FLaP_logo.webp"
];

var gameInPool = Array(gameNames.length).fill(true);


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0x000000, 200, 1000);

const spotLight = new THREE.SpotLight(0xffffff, 100000);
spotLight.position.set(0, 300, 200);
spotLight.angle = Math.PI / 8;
spotLight.penumbra = 1;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 10000;
spotLight.shadow.bias = -0.00001;
var newTarget = new THREE.Object3D();
newTarget.position.set(0, 0, 0);
spotLight.target = newTarget;
scene.add(newTarget);
scene.add(spotLight);

const spotLightTwo = new THREE.SpotLight(0xff0000, 200000);
spotLightTwo.position.set(0, 200, -400);
spotLightTwo.angle = Math.PI / 6;
spotLightTwo.penumbra = 1;
//spotLightTwo.castShadow = true;
spotLightTwo.shadow.mapSize.width = 1024;
spotLightTwo.shadow.mapSize.height = 1024;
spotLightTwo.shadow.camera.near = 1;
spotLightTwo.shadow.camera.far = 10000;
var newTargetTwo = new THREE.Object3D();
newTargetTwo.position.set(0, 0, 0);
spotLightTwo.target = newTargetTwo;
scene.add(newTargetTwo);
scene.add(spotLightTwo);

const spotLightThree = new THREE.SpotLight(0x0000ff, 200000);
spotLightThree.position.set(-500, 600, -800);
spotLightThree.angle = Math.PI / 8;
spotLightThree.penumbra = 1;
//spotLightThree.castShadow = true;
spotLightThree.shadow.mapSize.width = 1024;
spotLightThree.shadow.mapSize.height = 1024;
spotLightThree.shadow.camera.near = 1;
spotLightThree.shadow.camera.far = 10000;
var newTargetThree = new THREE.Object3D();
newTargetThree.position.set(0, 0, 0);
spotLightThree.target = newTargetThree;
scene.add(newTargetThree);
scene.add(spotLightThree);

const spotLightFour = new THREE.SpotLight(0x0000ff, 200000);
spotLightFour.position.set(500, 600, -800);
spotLightFour.angle = Math.PI / 8;
spotLightFour.penumbra = 1;
//spotLightFour.castShadow = true;
spotLightFour.shadow.mapSize.width = 1024;
spotLightFour.shadow.mapSize.height = 1024;
spotLightFour.shadow.camera.near = 1;
spotLightFour.shadow.camera.far = 10000;
var newTargetFour = new THREE.Object3D();
newTargetFour.position.set(0, 0, 0);
spotLightFour.target = newTargetFour;
scene.add(newTargetFour);
scene.add(spotLightFour);

/*const spotLightFive = new THREE.SpotLight(0x00ffff, 200000);
spotLightFive.position.set(0, 600, 0);
spotLightFive.angle = Math.PI / 16;
spotLightFive.penumbra = 1;
spotLightFive.shadow.mapSize.width = 1024;
spotLightFive.shadow.mapSize.height = 1024;
spotLightFive.shadow.camera.near = 1;
spotLightFive.shadow.camera.far = 10000;
var newTargetFive = new THREE.Object3D();
newTargetFive.position.set(0, 0, 0);
spotLightFive.target = newTargetFive;
scene.add(newTargetFive);
scene.add(spotLightFive);*/

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const container = document.getElementById('container');

const canvas = document.getElementById('three-canvas');
const renderer = new THREE.WebGLRenderer( { canvas: canvas});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);
window.addEventListener('resize', onWindowResize);

const clock = new THREE.Clock();

var settingsButton = document.getElementById('settings-toggle');
settingsButton.onclick = function(event) { toggleTabletOpen()}

const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x404040, depthWrite: false }));
mesh.rotation.x = - Math.PI / 2;
mesh.receiveShadow = true;
scene.add(mesh);

const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
grid.material.opacity = 0.1;
grid.material.transparent = true;
scene.add(grid);

let loader = new GLTFLoader();
var mixer;

var windAnim = undefined;

loader.load("public/security_breach_prize_box.glb", (glb) => {
    var fbx = glb.scene;
    fbx.scale.setScalar(1000);
    fbx.position.set(0, 57, 0);

    fbx.traverse(function(object) {
        object.castShadow = true
        object.receiveShadow = true
    });

    mixer = new THREE.AnimationMixer(glb.scene);
    windAnim = mixer.clipAction(glb.animations[0]);
    windAnim.loop = THREE.LoopOnce;
    windAnim.timeScale = 2;
    windAnim.clampWhenFinished = true;

    scene.add(fbx);
});

camera.position.y = 100;
camera.position.z = 300;

var mouseDown = 0;

const clickContainer = document.getElementById("clickable-area");
var windAmount = 0;
var openAmount = 300;
var canWind = true;
var windAudio;
clickContainer.addEventListener("pointerdown", (event) => {
    ++mouseDown;

    if (canWind && windAnim && !tabletOpen) {
        windAudio = new Audio(getRandomWindNoise());
        windAudio.volume = 0.5;
        windAudio.play();

        windAnim.time = 0;
        windAnim.play();

        openAmount = getRandomInt(100, 300);
    }
});

clickContainer.addEventListener("pointerup", (event) => {
    --mouseDown;
    windAmount = 0;

    if (canWind) {
        // we're still winding rn
        windAudio.pause();
        windAnim.stop();
    }
});

var tabletImageIndex = 1;
var tabletOpen = false;

var innerTablet = document.getElementById('inner-tablet');
gameNames.forEach((val) => {
    var template = document.getElementById("game-template");
    var clone = template.cloneNode(true);
    clone.removeAttribute("id");
    innerTablet.appendChild(clone);
    clone.style.visibility = "inherit";
    clone.getElementsByClassName("game-name")[0].innerText = val;
});

var removeButton = document.getElementById('remove-button');
var keepButton = document.getElementById('ignore-button');

removeButton.onclick = function (event) { buttonPressed(true); };
keepButton.onclick = function (event) { buttonPressed(false); };

var currentGameIndex;
function buttonPressed(remove) {
    if (remove) {
        gameInPool[currentGameIndex] = false;
    }

    canWind = true;
    windAmount = 0;
    mouseDown = 0;
    windAnim.timeScale = 2;
    windAnim.reset();
    windAnim.stop();

    document.getElementById('result-screen').style.visibility = "hidden";
}

function animate() {
    const delta = clock.getDelta();

    // update animations
    if (mixer) {
        mixer.update(delta);
    }

    renderer.render(scene, camera);

    // update wind timer
    if (windAnim && canWind) {
        if (mouseDown == 1) {
            windAmount++;
        } else {
            windAmount = 0;
        }

        if (windAnim.time >= 4) {
            windAnim.time = 0.2;
        }
    }

    if (windAmount >= openAmount) {
        // open box
        canWind = false;
        windAmount = 0;

        var openAudio = new Audio('public/open.mp3');
        openAudio.volume = 0.5;
        openAudio.play();
        windAudio.pause();

        // go to box open part of animation
        windAnim.time = 4.5;
        windAnim.timeScale = 40;

        // pick a random game
        currentGameIndex = getRandomInt(0, gameNames.length - 1);

        while (!gameInPool[currentGameIndex]) {
            currentGameIndex = getRandomInt(0, gameNames.length - 1);
        }

        document.getElementById('result-screen-logo').src = "public/" + gameLogos[currentGameIndex];
        document.getElementById('result-screen').style.visibility = "visible";
    }

    var tablet = document.getElementById('tablet');
    var image = 'public/tablet' + Math.floor(tabletImageIndex) + '.png';
    tablet.src = image;

    if (!tabletOpen && tabletImageIndex > 1) {
        tabletImageIndex -= 0.5;
    }

    if (tabletOpen && tabletImageIndex < 11) {
        tabletImageIndex += 0.5;
    }

    var innerTablet = document.getElementById('inner-tablet');
    if (tabletImageIndex == 11) {
        innerTablet.style.visibility = "visible";
    } else {
        innerTablet.style.visibility = "hidden";
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function getRandomWindNoise() {
    let index = getRandomInt(1, 8);
    return `public/wind${index}.mp3`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleTabletOpen() {
    tabletOpen = !tabletOpen;

    if (tabletOpen) {
        new Audio('public/open.ogg').play();
    }
    else
    {
        new Audio('public/close.ogg').play();
    }
}