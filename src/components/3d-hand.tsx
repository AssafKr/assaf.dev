import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function createScene() {
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
    "model.glb",
    function (gltf) {
      scene.add(gltf.scene);
      const cube = gltf.scene.getObjectByName("Cube");
      (cube as any).material = new THREE.MeshLambertMaterial({
        color: 0xff0000,
      });
      cube.rotateX(Math.PI / 2);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  const light = new THREE.DirectionalLight();

  light.position.x = 10.1;
  light.position.y = 7.5;
  light.position.z = 6.4;
  scene.add(light);

  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  render();
}
