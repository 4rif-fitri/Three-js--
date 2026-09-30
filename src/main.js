import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

let Height = window.innerHeight
let Width = window.innerWidth
let canvas = document.querySelector(".canvas")

let axesHellper = new THREE.AxesHelper(2) 
let scene = new THREE.Scene()
let cubeGeometry = new THREE.BoxGeometry(1,1,1)
let cubeMaterial = new THREE.MeshBasicMaterial({ color: "lightblue" , wireframe: true})
let cubeMaterial1 = new THREE.MeshBasicMaterial({ color: "red" })
let cubeMash = new THREE.Mesh(cubeGeometry, cubeMaterial1)
let cubeMash1 = new THREE.Mesh(cubeGeometry,cubeMaterial)

let group = new THREE.Group()
group.add(cubeMash)
group.add(cubeMash1)
// group.rotateX(45)
// cubeMash1.rotation.y = 45
// cubeMash1.rotation.y = Math.PI * 0.25
// cubeMash1.rotation.z = THREE.MathUtils.degToRad(45)
// cubeMash1.rotation.y = THREE.MathUtils.degToRad(45)

let camera = new THREE.PerspectiveCamera(50, Width / Height, 0.1, 30)
let aspectRatio = Width/Height
// let camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio,1,-1,0.1,200)
let pixelRatio = window.devicePixelRatio 
let maxpixelRatio = Math.min(pixelRatio, 2)

document.addEventListener("keydown", e => {
  let code = e.code
  if (code == "ArrowUp") cubeMash.position.y += 0.1
  if (code == "ArrowDown") cubeMash.position.y -= 0.1
  if (code == "ArrowLeft") cubeMash.position.x -= 0.1
  if (code == "ArrowRight") cubeMash.position.x += 0.1
  
  if (code == "KeyW") cubeMash1.position.y += 0.1
  if (code == "KeyS") cubeMash1.position.y -= 0.1
  if (code == "KeyA") cubeMash1.position.x -= 0.1
  if (code == "KeyD") cubeMash1.position.x += 0.1
  
  // if (code == "ArrowUp") cubeMash.scale.y += 0.1
  // if (code == "ArrowDown") cubeMash.scale.y -= 0.1
  // if (code == "ArrowLeft") cubeMash.scale.x -= 0.1
  // if (code == "ArrowRight") cubeMash.scale.x += 0.1
})

// cubeMash.scale.set(2,2,2)

camera.position.z = 4

// base detection
let distance = cubeMash.position.distanceTo(camera.position)
console.log(distance); 

let tempVactor = new THREE.Vector3(0,2,0)
cubeMash.position.copy(tempVactor)
scene.add(axesHellper)
// scene.add(cubeMash)
scene.add(group)
scene.add(camera) 

let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setSize(Width, Height)
renderer.setPixelRatio(maxpixelRatio)

let controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.autoRotate = true
 
let clock = new THREE.Clock()
// let previousTime = 0

window.addEventListener("resize", e => {
  Height = window.innerHeight
  Width = window.innerWidth
  aspectRatio = Width / Height
  camera.aspect = aspectRatio 

  renderer.setSize(Width, Height)
  camera.updateProjectionMatrix()
})

function renderScence(){
  let currentTime = clock.getElapsedTime()
  // let delta = currentTime - previousTime
  // previousTime = currentTime
  // cubeMash1.rotation.x = THREE.MathUtils.degToRad(2) * delta * 50;  

  // cubeMash1.scale.x = Math.sin(currentTime) + 1
  // cubeMash1.scale.y = Math.sin(currentTime) - 1
  
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderScence)
}
renderScence()

cubeMash.addEventListener("click", e => {
  alert("asd")
})