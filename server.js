const express = require('express');
require('dotenv').config();
require('./config/dbConnect');

const app = express();

//middlewares
//routes
//Error handlers middleware
//Listem to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on ${PORT}`))