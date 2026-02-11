import express from "express";
import { loadEnv } from "./config/env.js";
import agentRoutes from "./routes/agent.routes.js";

export function startServer() {
  loadEnv();

  const app = express();
  app.use(express.json());

  app.use("/api/agents", agentRoutes);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Agent Circle running on http://localhost:${port}`);
  });
}
