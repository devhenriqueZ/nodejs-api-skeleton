import "dotenv/config";
import app from "./src/app.js";
import swaggerUi from 'swagger-ui-express';
import initializeSchedules from './src/config/cronJobs.js';
import { startConsumers } from './src/app/services/rabbitmq/consumer.js';
import * as fs from 'fs/promises';

const PORT = process.env.PORT || 3000;

const swaggerFilePath = './swagger-output.json';
const swaggerFileContent = await fs.readFile(swaggerFilePath, 'utf-8');
const swaggerFile = JSON.parse(swaggerFileContent);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

initializeSchedules();
startConsumers();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});