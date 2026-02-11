import { AgentRuntime } from "./runtime.js";

export class Orchestrator {
  constructor() {
    this.runtime = new AgentRuntime();
  }

  dispatch(agent, task) {
    return this.runtime.execute(agent, task);
  }
}
