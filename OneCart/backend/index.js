import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Assuming this path is correct
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'; // Assuming this path is correct
import { connect } from 'mongoose';
import cors from "cors";
dotenv.config(); // Load environment variables from .env file

let port = process.env.PORT || 6000; // Server will run on port 6000 by default

let app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookieParser()); // Middleware to parse cookies
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true, // Allow credentials (cookies, authorization headers, etc.) 
}))
 
// Mount your authentication routes
app.use("/api/auth", authRoutes);

app.listen(port, async () => {
    // Connect to MongoDB
    console.log('Hello from server')
    connectDB()
});