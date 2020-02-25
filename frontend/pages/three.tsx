import React, { useEffect } from "react";
import { NextPage } from "next";
import { Canvas, useThree } from "react-three-fiber";

import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../src/const";

import Window from "../src/components/Window";
import Field from "../src/components/Field";
import Tetriminos from "../src/components/Tetriminos";

import useTetrisWorker from "../src/customHooks/useTetrisWorker";

const ThreePage: NextPage = (_props: any) => {
  const [focusShortcut, lines, nextLines, hold] = useTetrisWorker();

  useEffect(() => {
    window.addEventListener("keydown", focusShortcut);
    return () => {
      window.removeEventListener("keydown", focusShortcut);
    };
  });

  // useEffect(() => {
  //   start();
  //   return () => {};
  // }, []);

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
