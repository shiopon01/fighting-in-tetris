import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../const"

const Window = () => {
  const ref: any = useRef();
  useFrame(() => {});

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[WINDOW_WIDTH, WINDOW_HEIGHT]} />
      <meshBasicMaterial attach="material" color="#14166D" />
    </mesh>
  );
};
export default Window;
