const mongoose = require('mongoose');
const MONGO_URL = process.env.DB_URL;


const connectDB = () => {
    // connect to mongogo db
    mongoose.connect(MONGO_URL);
    mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection is ready');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose default connection has occured ' + err + ' error');
    });
     mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection is disconnected');
    });
}

module.exports = connectDB;