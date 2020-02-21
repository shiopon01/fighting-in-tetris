import { useState, useEffect } from "react";
import MyWorker from "worker-loader?name=static/[hash].worker.js!../workers/tetris.worker";

const useTetrisWorker = (): [any] => {
  const [worker, setWorker] = useState<MyWorker>();

  useEffect(() => {
    const worker = new MyWorker();

    worker.onmessage = async (event: any) => {
      switch (event.data.operation) {
        case "start":
          worker.postMessage({ operation: "response" });
          break;
        default:
          break;
      }
    };

    setWorker(worker);
    return () => worker.terminate();
  }, []);

  const startTetrisWorker = (): any => {
    if (worker === undefined) {
      return "Workerが読み込まれていません";
    }
    worker.postMessage({ operation: "start" });
  };

  return [
    startTetrisWorker
  ];
};

export default useTetrisWorker;
