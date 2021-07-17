import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load(
  "hand.glb",
  function (gltf) {
    console.log("addding", gltf.scene);
    scene.add(gltf.scene);
    const cube = gltf.scene.getObjectByName("Cube");
    (cube as any).material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    cube.rotateX(Math.PI / 2);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

camera.position.z = 5;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
