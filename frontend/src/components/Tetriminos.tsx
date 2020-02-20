import React from "react";
import TetriminoPiece from "./TetriminoPiece";
import { FIELD_ZERO_WIDTH, FIELD_ZERO_HEIGHT, MINO_SIZE } from "../const";

const Tetriminos = ({ lines }: any) => {
  console.log(lines);

  const tetriminos: any = [];
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] !== 0) {
        let color: any = null; // I
        switch (lines[i][j]) {
          case 1: // I
            color = "#00FFD2"
            break;
          case 2: // O
            color = "#F7FF27";
            break;
          case 3: // T
            color = "#E300FE";
            break;
          case 4: // J
            color = "#3426FF";
            break;
          case 5: // L
            color = "#FF9700";
            break;
          case 6: // S
            color = "#00FF47";
            break;
          case 7: // Z
            color = "#FF0053";
            break;
          default:
            break;
        }

        const width = FIELD_ZERO_WIDTH + MINO_SIZE * j;
        const height = FIELD_ZERO_HEIGHT - MINO_SIZE * i;
        tetriminos.push(<TetriminoPiece color={color} width={width} height={height} />);
      }
    }
  }

  return <>{tetriminos}</>;
};

export default Tetriminos;
