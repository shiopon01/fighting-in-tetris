import { useState, useEffect } from "react";
import MyWorker from "worker-loader?name=static/[hash].worker.js!../workers/tetris.worker";
import { FIELD } from "../const";

const useTetrisWorker = (): [any, number[][], number[], number] => {
  const [worker, setWorker] = useState<MyWorker>();
  const [running, setRunning] = useState<boolean>(false);
  const [lines, setLines] = useState<number[][]>(FIELD);
  const [nextLines, setNextLines] = useState<number[]>([]);
  const [holdTetrimino, setHoldTetrimino] = useState<number>(0);

  useEffect(() => {
    const worker = new MyWorker();

    // WorkerからOperationを受けた時の処理
    worker.onmessage = async (event: any) => {
      switch (event.data.operation) {
        case "display":
          setLines(event.data.lines);
          setNextLines(event.data.nextLines);
          setHoldTetrimino(event.data.holdTetrimino)
          break;
        default:
          break;
      }
    };
    setWorker(worker);
    return () => worker.terminate();
  }, []);

  const start = () => {
    if (worker === undefined) return;
    setRunning(true)
    worker.postMessage({ operation: "start" });
  };

  const pause = () => {
    if (worker === undefined) return;
    setRunning(false)
    worker.postMessage({ operation: "pause" });
  };

  const moveR = () => {
    if (worker === undefined) return;
    worker.postMessage({ operation: "moveR" });
  };

  const moveL = () => {
    if (worker === undefined) return;
    worker.postMessage({ operation: "moveL" });
  };

  const softDrop = () => {
    if (worker === undefined) return;
    worker.postMessage({ operation: "softDrop" });
  };

  const hardDrop = () => {
    if (worker === undefined) return;
    worker.postMessage({ operation: "hardDrop" });
  };

  const spinR = () => {
    if (worker === undefined) return;
    worker.postMessage({ operation: "spinR" });
  };

  const spinL = () => {
    if (worker === undefined) return;
    worker.postMessage({ operation: "spinL" });
  };

  const hold = () => {
    if (worker === undefined) return;
    worker.postMessage({ operation: "hold" });
  };

  const focusShortcut = (e: KeyboardEvent) => {
    switch (e.keyCode) {
      case 32: // Space
        if (running) {
          pause();
        } else {
          start();
        }
        break;
      case 37: // ←
      case 65: // a
        moveL();
        break;
      case 38: // ↑
      case 87: // w
        hardDrop();
        break;
      case 39: // →
      case 68: // d
        moveR();
        break;
      case 40: // ↓
      case 83: // s
        softDrop();
        break;
      case 74: // j
      case 81: // q
        spinL();
        break;
      case 75: // k
      case 69: // e
        spinR();
        break;
      case 73: // i
      case 82: // r
        hold();
        break;
      default:
        break;
    }
    // console.log("keydown: ", e.keyCode);
    e.preventDefault();
  };

  return [focusShortcut, lines, nextLines, holdTetrimino];
};

export default useTetrisWorker;
