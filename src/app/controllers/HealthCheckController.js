import mongoose from "mongoose";
import { HealthCheckStatus, HealthCheckMessage } from '../helpers/enums/DatabaseStatus.js';
import HttpStatus from '../helpers/enums/HttpStatus.js';

class HealthCheckController {

  async health(req, res) {
    const healthStatus = await this.getHealthStatus();
    res.json(healthStatus);
  }

  async databaseHealth(req, res) {
    try {
      const dbStatus = await this.getDatabaseStatus();
      res.json(dbStatus);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: HealthCheckStatus.INTERNAL_SERVER_ERROR });
    }
  }

  async getDatabaseStatus() {
    const { dbName, host, port } = mongoose.connection.client.s.options || {};

    const isConnected = mongoose.connection.readyState === 1;
    const status = isConnected ? HealthCheckStatus.DATABASE_CONNECTED : HealthCheckStatus.DATABASE_DISCONNECTED;
    const message = isConnected ? HealthCheckMessage.DATABASE_CONNECTED_MESSAGE : HealthCheckMessage.DATABASE_DISCONNECTED_MESSAGE;

    return {
      status,
      message,
      database: isConnected ? { name: dbName, host, port } : null,
    };
  }

  async getHealthStatus() {
    const startTime = Date.now();
    const uptime = process.uptime();
    const responseTime = await this.calculateResponseTime(startTime);

    return {
      status: HealthCheckStatus.HEALTH_OK,
      uptime,
      responseTime,
    };
  }

  async calculateResponseTime(startTime) {
    const totalTime = Date.now() - startTime;
    return `${totalTime}ms`;
  }
}

export default new HealthCheckController();