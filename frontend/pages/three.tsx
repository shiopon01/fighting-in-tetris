import React, { useRef, useMemo } from "react";
import { NextPage } from "next";
import { Canvas, useThree } from "react-three-fiber";

import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../src/const";

import Window from "../src/components/Window";
import Field from "../src/components/Field";
import Tetriminos from "../src/components/Tetriminos";

import useTetrisWorker from "../src/customHooks/useTetrisWorker";

const ThreePage: NextPage = (_props: any) => {
  const [startWebWorker] = useTetrisWorker();
  startWebWorker();

  // const size = useWindowSize();
  const lines = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 8, 8, 0, 0, 2, 1],
    [1, 0, 3, 3, 3, 3, 8, 5, 5, 5, 2, 1],
    [1, 0, 5, 5, 6, 6, 6, 6, 6, 5, 2, 1],
    [1, 0, 5, 3, 3, 6, 6, 4, 8, 8, 2, 1],
    [1, 0, 5, 3, 3, 6, 4, 4, 4, 8, 8, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
        camera={{
          fov: 90,
          aspect: WINDOW_WIDTH / WINDOW_HEIGHT,
          near: 0.1,
          far: 1000,
          position: [0, 0, WINDOW_HEIGHT / 2]
        }}
      >
        <Window />
        <Field />
        <Tetriminos lines={lines} />
      </Canvas>
    </div>
  );
};

export default ThreePage;
