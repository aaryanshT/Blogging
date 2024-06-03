const express = require('express');
const app = express(); //creates an instance of our express application
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const cors = require('cors')

//connecting to database 
const connectDB = require('./db/connectDB');
connectDB();
app.use(cors())

//importing the user schema for login and registration
const User = require('./models/User');

app.use(express.json());

//login
app.use('/', loginRoute);

//register
app.use('/', registerRoute);

//starting the server
app.listen(8000, () => {
    console.log("server is listening on 8000");
})