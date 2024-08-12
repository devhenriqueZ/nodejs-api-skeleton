import express from "express";
import connectToDatabase from "./config/database.js";
import routes from "./routes/index.js";

await connectToDatabase();

const app = express();
routes(app);

export default app;
