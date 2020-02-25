import { FIELD, TETRIMINOS } from "../const";
import TetriminoClass from "./TetriminoClass";

class TetrisClass {
  private next = new TetriminoClass();
  private field = FIELD;
  private minos = FIELD;
  private holdIndex: number | null = null;
  private minoIndex: number | null = null;
  private minoRotation: number | null = null;

  constructor() {}

  getField(): number[][] {
    const res = FIELD;
    for (let i = 0; i < this.field.length - 1; i++) {
      for (let j = 1; i < this.field[i].length - 1; j++) {
        res[i][j] = this.field[i][j] || this.minos[i][j]
      }
    }
    return res;
  }

  getHold(): number {
    return this.holdIndex || 0;
  }

  popTetrimino(): any {
    const index = Math.floor(Math.random() * Math.floor(max));
  }

  softDrop() {}

  pop() {
    this.minoIndex = this.next.popIndex();
  }
}

export default TetrisClass;
