/// <reference types="react-scripts" />

declare module "workers/codeRunner.worker.js" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}
