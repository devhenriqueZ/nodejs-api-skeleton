import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log("Connected to the database");
    return connection.connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export default connectToDatabase;