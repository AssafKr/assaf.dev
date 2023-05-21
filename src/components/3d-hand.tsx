import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function createScene(parentElement: HTMLElement) {
  const scene = new THREE.Scene();
  let mixer: THREE.AnimationMixer | null = null;
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  parentElement.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  loader.load(
    "model.glb",
    function (gltf) {
      const cube = gltf.scene.getObjectByName("Cube");
      (cube as any).material = new THREE.MeshLambertMaterial({
        color: 0xff0000,
      });

      mixer = new THREE.AnimationMixer(gltf.scene);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();

      scene.add(gltf.scene);
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

  let lastTime = 0;
  let currScroll = 0;
  function render(accumTime: number) {
    requestAnimationFrame(render);
    // if (mixer) mixer.update((accumTime - lastTime) / 1000);
    // if (mixer) mixer.update(currScroll);
    lastTime = accumTime;
    renderer.render(scene, camera);
  }

  window.onscroll = (e) => {
    console.log("scroll!", window.scrollY);
    currScroll = window.scrollY;
    if (mixer) mixer.update(currScroll / 50000);
  };
  render(lastTime);
}
