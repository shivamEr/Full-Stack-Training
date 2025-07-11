const mongoose = require('mongoose')

function DbConnect() {
    mongoose.connect('mongodb://localhost:27017')
        .then(() => {
            console.log("DB connected")
        })
        .catch(() => {
            console.log("Error while DB connection");
        })
}

module.exports = DbConnect;