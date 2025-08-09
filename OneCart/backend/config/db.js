// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error: ${error.message} : DB Error`);
        throw error; // Re-throw to be caught by startServer
    }
};

export default connectDB;