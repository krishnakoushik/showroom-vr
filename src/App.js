import logo from './logo.svg';
import './App.css';

import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import Ferrari from './assets/ferrari.glb';
import FerrariPng from './assets/ferrari_ao.png';

function App() {
    let camera, scene, renderer;
    let stats;

    let grid;
    let controls;

    const wheels = [];

    function init() {
        const container = document.getElementById('container');

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setAnimationLoop(render);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.85;
        renderer.xr.enabled = true;
        container.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize);

        stats = new Stats();
        container.appendChild(stats.dom);

        //

        camera = new THREE.PerspectiveCamera(
            40,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.set(4.25, 1.4, -4.5);

        controls = new OrbitControls(camera, container);
        controls.target.set(0, 0.5, 0);
        controls.update();

        const pmremGenerator = new THREE.PMREMGenerator(renderer);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xeeeeee);
        scene.environment = pmremGenerator.fromScene(
            new RoomEnvironment()
        ).texture;
        scene.fog = new THREE.Fog(0xeeeeee, 10, 50);

        grid = new THREE.GridHelper(100, 40, 0x000000, 0x000000);
        grid.material.opacity = 0.1;
        grid.material.depthWrite = false;
        grid.material.transparent = true;
        scene.add(grid);

        // materials

        const bodyMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xff0000,
            metalness: 0.6,
            roughness: 0.4,
            clearcoat: 0.05,
            clearcoatRoughness: 0.05,
        });

        const detailsMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1.0,
            roughness: 0.5,
        });

        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0.1,
            transmission: 0.9,
            transparent: true,
        });

        const bodyColorInput = document.getElementById('body-color');
        bodyColorInput.addEventListener('input', function () {
            bodyMaterial.color.set(this.value);
        });

        const detailsColorInput = document.getElementById('details-color');
        detailsColorInput.addEventListener('input', function () {
            detailsMaterial.color.set(this.value);
        });

        const glassColorInput = document.getElementById('glass-color');
        glassColorInput.addEventListener('input', function () {
            glassMaterial.color.set(this.value);
        });

        // Car

        const shadow = new THREE.TextureLoader().load(FerrariPng);

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderConfig({ type: 'js' });
        dracoLoader.setDecoderPath(
            'https://www.gstatic.com/draco/v1/decoders/'
        );

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        loader.load(Ferrari, function (gltf) {
            const carModel = gltf.scene.children[0];

            carModel.getObjectByName('body').material = bodyMaterial;

            carModel.getObjectByName('rim_fl').material = detailsMaterial;
            carModel.getObjectByName('rim_fr').material = detailsMaterial;
            carModel.getObjectByName('rim_rr').material = detailsMaterial;
            carModel.getObjectByName('rim_rl').material = detailsMaterial;
            carModel.getObjectByName('trim').material = detailsMaterial;

            carModel.getObjectByName('glass').material = glassMaterial;

            wheels.push(
                carModel.getObjectByName('wheel_fl'),
                carModel.getObjectByName('wheel_fr'),
                carModel.getObjectByName('wheel_rl'),
                carModel.getObjectByName('wheel_rr')
            );

            // shadow
            const mesh = new THREE.Mesh(
                new THREE.PlaneGeometry(0.655 * 4, 1.3 * 4),
                new THREE.MeshBasicMaterial({
                    map: shadow,
                    blending: THREE.MultiplyBlending,
                    toneMapped: false,
                    transparent: true,
                })
            );
            mesh.rotation.x = -Math.PI / 2;
            mesh.renderOrder = 2;
            carModel.add(mesh);

            scene.add(carModel);
        });
        document.body.appendChild(VRButton.createButton(renderer));
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function animate() {
        renderer.setAnimationLoop(() => {
            render();
        });
    }

    function render() {
        const time = -performance.now() / 1000;

        for (let i = 0; i < wheels.length; i++) {
            wheels[i].rotation.x = time * Math.PI;
        }

        grid.position.z = -time % 5;

        renderer.render(scene, camera);

        stats.update();
    }
    init();
    animate();

    return <div className="App"></div>;
}

export default App;
