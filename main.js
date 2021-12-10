import * as THREE from 'https://cdn.skypack.dev/three@0.135.0';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,10,1000)

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(window.devicePixelRatio)


const geomatry = new THREE.SphereGeometry(10);
const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
material.roughness = 0;
material.wireframe = true


const sphere = new THREE.Mesh(geomatry,material);
scene.add(sphere)

const light = new THREE.DirectionalLight( 0xFAF8FE ,1);
scene.add(light)

light.position.set(1,0,0.8)

renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z = 40
function animate(){
  window.requestAnimationFrame(animate);
  renderer.render(scene,camera)
  sphere.rotation.y += 1
  sphere.rotation.x += -0.01
  // light.rotation.y += 0.01
  // camera.rotation.y += 0.01
}

animate()

window.addEventListener('mousemove',(event)=>{
  // light.position.y = -(event.clientY * 0.01)
  // light.position.x = event.clientX*0.01
  // light.position.z = event.clientY * 0.01
})

