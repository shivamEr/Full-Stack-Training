
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

async function connectToDB() {
    await mongoose.connect(DB_URL)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) =>{
            console.error('Error connecting to MongoDB:', err);
        })
}

module.exports = connectToDB;


