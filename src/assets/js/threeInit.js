import * as THREE from 'three'
let data = null

const initThree = (currentData,sceneTag) => {
    data=currentData;
    initScene()
    initCamera()
    initRenderer()
    animate();
    sceneTag.value.appendChild(data.renderer.domElement);
}

const initScene = () => {
    data.scene = new THREE.Scene()
    data.scene.background = new THREE.Color('gray')
}

const initCamera = () => {
    data.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
}

const initRenderer = () => {
    data.renderer = new THREE.WebGLRenderer()
    data.renderer.setSize(window.innerWidth, window.innerHeight);

}

const animate = () => {
    requestAnimationFrame(animate);
    data.renderer.render(data.scene, data.camera);
}

export { initThree }
