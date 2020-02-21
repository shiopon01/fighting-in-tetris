import TetrisClass from "../utils/TetrisClass";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ctx: Worker = self as any;
let intervalId: NodeJS.Timeout;
let displayIntervalId: NodeJS.Timeout;
let tetris: any;

ctx.addEventListener("message", async event => {
  switch (event.data.operation) {
    case "start":
      tetris = new TetrisClass();
      intervalId = setInterval(() => {
        if (tetris === null) return;
        console.log("テトリミノ 1ブロック落下");
      }, 800);
      displayIntervalId = setInterval(() => {
        if (tetris === null) return;
        ctx.postMessage({ operation: "display", lines: tetris.getField() });
      }, 100);
      break;

    case "stop":
      tetris = null;
      clearInterval(intervalId);
      clearInterval(displayIntervalId);
      break;
    case "pause":
      clearInterval(intervalId);
      break;

    case "moveR":
      console.log("moveR")
      break;
    case "moveL":
      console.log("moveL")
      break;
    case "softDrop":
      console.log("softDrop")
      break;
    case "hardDrop":
      console.log("hardDrop")
      break;
    case "spinR":
      console.log("spinR")
      break;
    case "spinL":
      console.log("spinL")
      break;
    case "hold":
      console.log("hold")
      break;
    default:
      break;
  }
});

export default ctx;
