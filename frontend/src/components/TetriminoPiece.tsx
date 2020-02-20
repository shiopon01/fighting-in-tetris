import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { MINO_SIZE } from "../const"

const Tetrimino = (props: any) => {
  const ref: any = useRef();
  useFrame(() => {});

  return (
    <mesh ref={ref} position={[props.width, props.height, 0]}>
      <planeGeometry attach="geometry" args={[MINO_SIZE, MINO_SIZE]} />
      <meshBasicMaterial attach="material" color={props.color ? props.color : "red"} />
    </mesh>
  );
};

export default Tetrimino;


// const createMino = (type: string) => {
//   switch (type) {
//     case 'T': return [
//         [0, 0, 0],
//         [0, 1, 0],
//         [1, 1, 1],];
//     case 'I': return [
//         [0, 0, 0, 0],
//         [2, 2, 2, 2],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],];
//     case 'O': return [
//         [0, 0, 0],
//         [0, 3, 3],
//         [0, 3, 3],];
//     case 'J': return [
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [4, 0, 0, 0],
//         [4, 4, 4, 4],];
//     case 'L': return [
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 5],
//         [5, 5, 5, 5],];
//     case 'S': return [
//         [0, 0, 0],
//         [0, 6, 6],
//         [6, 6, 0],];
//     case 'Z': return [
//         [0, 0, 0],
//         [7, 7, 0],
//         [0, 7, 7],];
//     case 'F': return [
//         [0, 0, 0, 0, 0],
//         [8, 8, 8, 0, 0],
//         [8, 0, 0, 0, 0],
//         [8, 8, 0, 0, 0],
//         [8, 0, 0, 0, 0],];
//     case 'P': return [
//         [0, 1, 0],
//         [1, 1, 1],
//         [0, 1, 0],];
//     case 'Q': return [
//         [0, 0, 0, 0],
//         [9, 9, 9, 0],
//         [9, 0, 9, 0],
//         [9, 9, 9, 9],];
// }
