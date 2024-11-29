
import './style.css' 

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// 원으로 바꾸기 , 좌표 판때기? 랑 무슨 시야 같은거 빼기, 별 삭제 

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const controls = new OrbitControls(camera, renderer.domElement);

const earthTexture = new THREE.TextureLoader().load('/image/earthmap1k.jpg');

const geometry = new THREE.SphereGeometry( 15, 64, 32 ); 
const material = new THREE.MeshBasicMaterial( {map: earthTexture} ); 
const earth = new THREE.Mesh( geometry, material ); 

scene.add(earth)

// const geometry = new THREE.SphereGeometry( 15, 64, 32 ); 
// const material = new THREE.MeshBasicMaterial( {map: earthTexture} ); 
// const moon = new THREE.Mesh( geometry, material ); 

// scene.add(moon)

// const spaceTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background = spaceTexture


function animate() {
  requestAnimationFrame(animate)

  earth.rotation.x += 0.001;
  earth.rotation.y += 0.005;
  earth.rotation.z += 0.001;

//   moon.rotation.x += 0.001;
//   moon.rotation.y += 0.005;
//   moon.rotation.z += 0.001;

  controls.update()

  renderer.render(scene, camera)
}

animate()

