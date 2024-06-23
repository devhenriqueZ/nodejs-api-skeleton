import express from "express";
import HealthCheckController from "../app/controllers/HealthCheckController.js";

const router = express.Router();

router.get('/health', (req, res) => {
  HealthCheckController.health(req, res);
});

router.get('/db-health', (req, res) => {
  HealthCheckController.databaseHealth(req, res);
});

export default router;