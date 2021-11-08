export default function asset_loader(
    THREE,
    loader,
    shadow,
    scene,
    scale,
    model_location
) {
    // Load a glTF resource
    loader.load(
        // resource URL
        model_location,
        // called when the resource is loaded
        function (gltf) {
            const carModel = gltf.scene || gltf.scene.children[0];
            carModel.scale.set(scale[0], scale[1], scale[2]);
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
        },
        // called while loading is progressing
        function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        // called when loading has errors
        function (error) {
            console.log(error);
        }
    );
}
