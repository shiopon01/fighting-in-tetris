import React, { useRef, useMemo } from "react";
import { NextPage } from "next";
import * as THREE from "three";
import { Canvas, useThree } from "react-three-fiber";
import useWindowSize from "../src/customHooks/useWindowSize";

import Window from "../src/components/Window";
import Field from "../src/components/Field";
import Tetriminos from "../src/components/Tetriminos";

const WIDTH = 256;
const HEIGHT = 192;
const FIELD_WIDTH = (HEIGHT - 20) / 2;
const FIELD_HEIGHT = HEIGHT - 20;
const MINO_SIZE = FIELD_HEIGHT / 20;

function Fatline() {
  const ref = useRef();
  return (
    <line ref={ref}>
      {/* <geometry vertices={[new THREE.Vector3(0, 0, 0), new THREE.Vector3(1000, 1000, 0)]} /> */}
      {/* <lineBasicMaterial attach="geometry" color="green" /> */}
    </line>
  );
}

const ThreePage: NextPage = (_props: any) => {
  // const size = useWindowSize();

  const lines = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 7, 0, 0, 1],
    [0, 2, 2, 2, 2, 7, 4, 4, 4, 1],
    [0, 4, 4, 5, 5, 5, 5, 5, 4, 1],
    [0, 4, 2, 2, 5, 5, 3, 7, 7, 1],
    [0, 4, 2, 2, 5, 3, 3, 3, 7, 7]
  ];

  return (
    <div className={"div"}>
      <style jsx>{`
        .div {
          height: 100vh;
          width: 100vw;
        }
        .canvas {
          height: auto;
          width: 100%;
        }
      `}</style>
      <Canvas
        className={"canvas"}
        camera={{ fov: 90, aspect: WIDTH / HEIGHT, near: 0.1, far: 1000, position: [0, 0, HEIGHT / 2] }}
      >
        <Window />
        <Field />
        <Tetriminos lines={lines} />
      </Canvas>
    </div>
  );
};

export default ThreePage;
