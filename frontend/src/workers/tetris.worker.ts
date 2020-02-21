/* eslint-disable @typescript-eslint/no-explicit-any */
const ctx: Worker = self as any;
let intervalId: NodeJS.Timeout;

ctx.addEventListener("message", async event => {
  switch (event.data.operation) {
    // setInterval 発火
    case "start":
      intervalId = setInterval(() => {
        console.log("Worker Message");
      }, 1000);
      break;
    case "stop":
      clearInterval(intervalId);
      break;
    case "pause":
      clearInterval(intervalId);
      break;
    default:
      break;
  }
});

export default ctx;
