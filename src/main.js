import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

let Height = window.innerHeight
let Width = window.innerWidth
let canvas = document.querySelector(".canvas")

let scene = new THREE.Scene()
let cubeGeometry = new THREE.BoxGeometry(1,1,1)
let cubeMaterial = new THREE.MeshBasicMaterial({color:"lightblue"})
let cubeMash = new THREE.Mesh(cubeGeometry,cubeMaterial)
let camera = new THREE.PerspectiveCamera(35, Width / Height, 0.1,30)

camera.position.z = 4

scene.add(cubeMash)
scene.add(camera) 

let renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

let controls = new OrbitControls(camera,canvas)

renderer.setSize(Width,Height)
renderer.render(scene,camera)
