const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Handle uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Uncaught Exception');
    process.exit(1);
});

// Config
dotenv.config({path:"backend/config/config.env"});

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

// Unhandled promise rejections

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
});