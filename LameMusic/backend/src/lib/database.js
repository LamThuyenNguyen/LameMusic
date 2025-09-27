import mongoose from "mongoose";

export const connectDB = async () => {
  try {
   const conn = await mongoose.connect(process.env.mongoDB_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1);// 1 failure 0 success
  }
};
