const express = require('express')
const app = express();
require('dotenv').config();

const connectDB = require('./config/connectToDB');

// import data from enviroment variables
const port = process.env.PORT || 3000;

// Middleware to parse json data of incoming request.
app.use(express.json());

// Seprate the logic with routers
const userRouter = require('./routes/userRoutes'); 

// Use the routers 
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my api');
});

app.listen(port, () => {
    connectDB();
    console.log(`server is running at http://localhost:${port}`)
})