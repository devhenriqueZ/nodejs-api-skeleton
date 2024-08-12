import mongoose from "mongoose";
import { HealthCheckMessage } from "../../src/app/helpers/enums/DatabaseStatus.js";

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log(HealthCheckMessage.DATABASE_CONNECTED_MESSAGE);
    return connection.connection;
  } catch (error) {
    console.error(HealthCheckMessage.DATABASE_DISCONNECTED_MESSAGE, error);
    throw error;
  }
};

export default connectToDatabase;