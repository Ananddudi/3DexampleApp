import * as THREE from "https://cdn.skypack.dev/three@0.135.0";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  10,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);

const geomatry = new THREE.SphereGeometry(10);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./earthtexture.jpg");
const material = new THREE.MeshStandardMaterial({
  map: texture,
});
material.roughness = 0;

const sphere = new THREE.Mesh(geomatry, material);
scene.add(sphere);

// const light = new THREE.DirectionalLight(0xfaf8fe, 1);
const light = new THREE.AmbientLight(0x404040, 2.8);
scene.add(light);

light.position.set(1, 0, 0.8);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 40;
function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.01;
  sphere.rotation.x += -0.01;
  // light.rotation.y += 0.01
  // camera.rotation.y += 0.01
}

animate();

window.addEventListener("mousemove", (event) => {
  console.log("here");
  // sphere.rotation.z = event.clientY * 0.01;
  sphere.rotation.y = event.clientX * 0.01;
  sphere.rotation.x = event.clientY * 0.01;
});
