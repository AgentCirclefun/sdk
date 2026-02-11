import express from "express";
import { Agent } from "../core/agent.js";
import { Orchestrator } from "../core/orchestrator.js";

const router = express.Router();
const orchestrator = new Orchestrator();

router.post("/create", (req, res) => {
  const { name, goal } = req.body;
  const agent = new Agent({ name, goal });

  res.json({
    success: true,
    agent
  });
});

router.post("/run", (req, res) => {
  const { name, goal, task } = req.body;
  const agent = new Agent({ name, goal });

  const result = orchestrator.dispatch(agent, task);

  res.json({
    success: true,
    result
  });
});

export default router;
