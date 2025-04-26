import config from './config';
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        if (!config.DB_URI) {
            throw new Error('MONGO_URI environment variable is not defined');
        }

        const conn = await mongoose.connect(config.DB_URI, {dbName:config.DB_NAME});

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
        // Handle connection events
        mongoose.connection.on('error', (err: Error) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        // Handle process termination
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            process.exit(0);
        });

    } catch (error: unknown) {
        console.error(`MongoDB connection error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        // process.exit(1);
    }
};

export default connectDB;
