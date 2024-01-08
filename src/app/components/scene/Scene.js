"use client";
import SceneComponent from "./SceneComponent";
import { useEffect, useRef } from "react";
import { Vector3 } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";

export default function Scene(props) {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  const onSceneReady = (scene) => {
    sceneRef.current = scene;
    const camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.setTarget(Vector3.Zero());
    camera.setPosition(new BABYLON.Vector3(-100, 20, -250));
    camera.heightOffset = 1;
    camera.lowerRadiusLimit = 100;
    camera.upperRadiusLimit = 250;
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    cameraRef.current = camera;
  };

  const init = async (scene, camera) => {
    return 0;
  };

  useEffect(() => {
    if (sceneRef.current && cameraRef.current) {
      init(sceneRef.current, cameraRef.current);
    }
  }, [sceneRef.current, cameraRef.current]);

  const onRender = (scene, delta) => {
    return 0;
  };

  return (
    <>
      <SceneComponent
        antialias
        onSceneReady={(scene) => {
          onSceneReady(scene);
        }}
        onRender={(scene, delta) => {
          onRender(scene, delta);
        }}
        id="my-canvas"
      />
    </>
  );
}
