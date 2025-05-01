import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const gameNames = [
    "FNAF 1",
    "FNAF 2",
    "FNAF 3 (Troll)",
    "FNAF 3",
    "FNAF 4",
    "FNAF World (Troll)",
    "FNAF World",
    "FNAF World DLC",
    "Sister Location (Troll)",
    "Sister Location",
    "Sister Location Custom Night",
    "Freddy Fazbear's Pizzeria Simulator",
    "Ultimate Custom Night (Troll)",
    "Ultimate Custom Night",
    "Help Wanted",
    "Help Wanted: Curse of Dreadbear",
    "Freddy in Space 2",
    "Security Breach: Fury's Rage",
    "Security Breach",
    "Security Breach: Ruin",
    "Freddy in Space 3",
    "Help Wanted 2",
    "Into The Pit",
    "Five Laps at Freddy's"
];

const gameLogos = [
    "game-thumbnails/001-fnaf-1.png",
    "game-thumbnails/002-fnaf-2.png",
    "game-thumbnails/003-fnaf-3-troll.png",
    "game-thumbnails/004-fnaf-3.png",
    "game-thumbnails/005-fnaf-4.png",
    "game-thumbnails/006-fnaf-world-troll.png",
    "game-thumbnails/007-fnaf-world.png",
    "game-thumbnails/008-fnaf-world-dlc.png",
    "game-thumbnails/009-sister-location-troll.png",
    "game-thumbnails/010-sister-location.png",
    "game-thumbnails/011-sister-location-custom-night.png",
    "game-thumbnails/012-pizza-sim.png",
    "game-thumbnails/013-ucn-troll.png",
    "game-thumbnails/014-ucn.png",
    "game-thumbnails/015-help-wanted.png",
    "game-thumbnails/016-dreadbear.png",
    "game-thumbnails/017-freddy-in-space-2.png",
    "game-thumbnails/018-furys-rage.png",
    "game-thumbnails/019-security-breach.png",
    "game-thumbnails/020-ruin.png",
    "game-thumbnails/021-freddy-in-space-3.png",
    "game-thumbnails/022-help-wanted-2.png",
    "game-thumbnails/023-into-the-pit.png",
    "game-thumbnails/024-five-laps-at-freddys.png"
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

var mouseDown = false;

const clickContainer = document.getElementById("clickable-area");
var windAmount = 0;
var openAmount = 300;
var canWind = true;
var windAudio;
clickContainer.addEventListener("pointerdown", (event) => {
    mouseDown = true;

    if (canWind && windAnim && !tabletOpen) {

        // pick a random game
        currentGameIndex = getRandomInt(0, gameNames.length - 1);

        var availableGames = gameInPool.filter(el => el == true).length;

        if (availableGames == 0) {
            return;
        }

        while (!gameInPool[currentGameIndex]) {
            currentGameIndex = getRandomInt(0, gameNames.length - 1);
        }

        document.getElementById('result-screen-logo').src = "public/" + gameLogos[currentGameIndex];
        document.getElementById('result-screen-title').innerText = gameNames[currentGameIndex];

        if (windAudio) {
            windAudio.pause();
        }

        windAudio = new Audio(getRandomWindNoise());
        windAudio.volume = 0.5;
        windAudio.play();

        windAnim.time = 0;
        windAnim.play();

        openAmount = getRandomFloat(2, 5);
    }
});

clickContainer.addEventListener("pointerup", (event) => {
    mouseDown = false;
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
    clone.id = val;
    innerTablet.appendChild(clone);
    clone.style.visibility = "inherit";
    clone.getElementsByClassName("game-name")[0].innerText = val;

    var checkbox = clone.getElementsByClassName("game-checkbox")[0];

    checkbox.onclick = function(event) {

        var gameIndex = gameNames.indexOf(val);

        var isActive = gameInPool[gameIndex];
        gameInPool[gameIndex] = !isActive;

        if (isActive) {
            checkbox.src = "public/checkbox-off.png";
        } else {
            checkbox.src = "public/checkbox-on.png";
        }
    };
});

var removeButton = document.getElementById('remove-button');
var keepButton = document.getElementById('ignore-button');

removeButton.onclick = function (event) { buttonPressed(true); };
keepButton.onclick = function (event) { buttonPressed(false); };

for (var i = 1; i < 12; i++) {
    preloadImage('public/tablet' + i + '.png');
}

var currentGameIndex;
function buttonPressed(remove) {
    if (remove) {
        gameInPool[currentGameIndex] = false;

        var game = document.getElementById(gameNames[currentGameIndex]);
        var checkbox = game.getElementsByClassName("game-checkbox")[0];
        checkbox.src = "public/checkbox-off.png";
    }

    canWind = true;
    windAmount = 0;
    mouseDown = false;
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
        if (mouseDown) {
            windAmount += delta;
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

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
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

function preloadImage(url)
{
    var img = new Image();
    img.src=url;
}