import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { FIELD_WIDTH, FIELD_HEIGHT } from "../const"

const Field = () => {
  const ref: any = useRef();
  useFrame(() => {});

  return (
    <>
      <mesh ref={ref}>
        <planeGeometry attach="geometry" args={[FIELD_WIDTH, FIELD_HEIGHT]} />
        <meshBasicMaterial attach="material" color="pink" />
      </mesh>
    </>
  );
};

export default Field;
