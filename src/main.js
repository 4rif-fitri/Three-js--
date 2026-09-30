import * as THREE from "three"

let Height = window.innerHeight
let Width = window.innerWidth

let canvas = document.querySelector(".canvas")

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(
  75, 
  Width / Height, 
  0.1,
  30
)

let cubeGeometry = new THREE.BoxGeometry(1,1,1)
let cubeMaterial = new THREE.MeshBasicMaterial({color:"red"})

let cubeMash = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

camera.position.z = 4

scene.add(cubeMash)
scene.add(camera) 

let renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(Width,Height)
renderer.render(scene,camera)
