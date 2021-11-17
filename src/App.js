import "./App.css";

import * as THREE from "three";

import { init } from "./initializer";
import { useEffect, useState } from "react";

function App() {
    let camera, scene, renderer, vrControl, dolly;
    let isMoving = false;
    let stats;
    const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;

    let grid;
    let controls;
    const form_options = ["Ferrari J50", "Ferrari F40", "Ferrari 458 Italia"];
    const option_to_model = {
        "Ferrari J50": "assets/ferrarij50.glb",
        "Ferrari F40": "assets/ferrari_f40.glb",
        "Ferrari 458 Italia": "assets/ferrari.glb",
    };
    const scale_mapper = {
        "Ferrari J50": [0.015, 0.015, 0.015],
        "Ferrari F40": [0.1, 0.1, 0.1],
        "Ferrari 458 Italia": [1, 1, 1],
    };
    const default_model = form_options[0];
    const [modelName, setModelName] = useState(default_model);

    const wheels = [];
    useEffect(() => {
        console.log("HI" + modelName);
        document.getElementById("container").innerHTML = "";
        init(
            renderer,
            camera,
            scene,
            controls,
            grid,
            wheels,
            stats,
            option_to_model[modelName],
            scale_mapper[modelName],
            vrControl,
            dolly,
            isMoving
        );
    }, [modelName]);

    const [bodyColor, setbodyColor] = useState("#ff0000");
    const bodyColorOnChange = (event) => {
        event.preventDefault();
        setbodyColor(event.target.value);
    };

    const [detailsColor, setDetailsColor] = useState("#ffffff");
    const detailsColorOnChange = (event) => {
        event.preventDefault();
        setDetailsColor(event.target.value);
    };

    const [glassColor, setGlassColor] = useState("#ffffff");
    const glassColorOnChange = (event) => {
        event.preventDefault();
        setGlassColor(event.target.value);
    };

    return (
        <div className="App">
            <label>
                Pick your car:
                <select
                    value={modelName}
                    onChange={(event) => {
                        setModelName(event.target.value);
                    }}
                >
                    {" "}
                    {form_options.map((val) => (
                        <option value={val} key={val}>
                            {val}{" "}
                        </option>
                    ))}
                </select>
            </label>

            <h1 align="center">VR SHOWROOM</h1>
            {modelName === "Ferrari 458 Italia" && (
                <div id="controls">
                    <span className="colorPicker">
                        <input
                            id="body-color"
                            type="color"
                            onChange={bodyColorOnChange}
                            value={bodyColor}
                        ></input>
                        <br />
                        Body
                    </span>
                    <span className="colorPicker">
                        <input
                            id="details-color"
                            type="color"
                            onChange={detailsColorOnChange}
                            value={detailsColor}
                        ></input>
                        <br />
                        Details
                    </span>
                    <span className="colorPicker">
                        <input
                            id="glass-color"
                            type="color"
                            onChange={glassColorOnChange}
                            value={glassColor}
                        ></input>
                        <br />
                        Glass
                    </span>
                </div>
            )}
            <div id="container"></div>
        </div>
    );
}

export default App;
