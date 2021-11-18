// import * as THREE from "three";
export default function asset_loader(
    THREE,
    loader,
    shadow,
    scene,
    scale,
    wheels,
    model_location,
    isCustomizable
) {
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

    if (isCustomizable) {
        const bodyColorInput = document.getElementById("body-color");
        bodyColorInput.addEventListener("input", function () {
            bodyMaterial.color.set(this.value);
        });

        const detailsColorInput = document.getElementById("details-color");
        detailsColorInput.addEventListener("input", function () {
            detailsMaterial.color.set(this.value);
        });

        const glassColorInput = document.getElementById("glass-color");
        glassColorInput.addEventListener("input", function () {
            glassMaterial.color.set(this.value);
        });
    }
    // Load a glTF resource
    loader.load(
        // resource URL
        model_location,
        // called when the resource is loaded
        function (gltf) {
            const carModel = gltf.scene || gltf.scene.children[0];
            carModel.scale.set(scale[0], scale[1], scale[2]);
            if (isCustomizable) {
                carModel.getObjectByName("body").material = bodyMaterial;

                carModel.getObjectByName("rim_fl").material = detailsMaterial;
                carModel.getObjectByName("rim_fr").material = detailsMaterial;
                carModel.getObjectByName("rim_rr").material = detailsMaterial;
                carModel.getObjectByName("rim_rl").material = detailsMaterial;
                carModel.getObjectByName("trim").material = detailsMaterial;

                carModel.getObjectByName("glass").material = glassMaterial;

                wheels.push(
                    carModel.getObjectByName("wheel_fl"),
                    carModel.getObjectByName("wheel_fr"),
                    carModel.getObjectByName("wheel_rl"),
                    carModel.getObjectByName("wheel_rr")
                );
            }
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
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function (error) {
            console.log(error);
        }
    );
}
