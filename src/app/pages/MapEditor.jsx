import { Suspense } from "react";
import Scene from "../components/scene/Scene";

export default function MapEditor() {
  return (
    <>
      <div className="sceneContainer">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </>
  );
}
