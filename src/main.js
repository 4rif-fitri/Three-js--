import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

let Height = window.innerHeight
let Width = window.innerWidth
let canvas = document.querySelector(".canvas")

let scene = new THREE.Scene()
let cubeGeometry = new THREE.BoxGeometry(1,1,1)
let cubeMaterial = new THREE.MeshBasicMaterial({color:"lightblue"})
let cubeMash = new THREE.Mesh(cubeGeometry,cubeMaterial)
let camera = new THREE.PerspectiveCamera(50, Width / Height, 0.1, 30)
let aspectRatio = Width/Height
// let camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio,1,-1,0.1,200)
let pixedRatio = window.devicePixelRatio 

camera.position.z = 4

scene.add(cubeMash)
scene.add(camera) 

let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setSize(Width, Height)
let maxPixedRatio = Math.min(pixedRatio, 2)
renderer.setPixelRatio(pixedRatio)

let controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.autoRotate = true
 
window.addEventListener("resize", e => {
  Height = window.innerHeight
  Width = window.innerWidth
  aspectRatio = Width / Height
  camera.aspect = aspectRatio 

  renderer.setSize(Width, Height)
  camera.updateProjectionMatrix()
})

function renderScence(){
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderScence)
}
renderScence()

