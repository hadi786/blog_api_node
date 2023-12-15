const express = require('express');
const userRoutes =  require('./routes/users/userRoutes');
const postRouter = require('./routes/posts/postRoutes');
const commentsRouter = require('./routes/comments/commentsRoutes');

require('dotenv').config();
require('./config/dbConnect');
const app = express();

//middlewares
const userAuth = {
  isLogin: false,
  isAdmin: false
}

//------------------------
// -------routes----------
//------------------------

//users route
app.use("/api/v1/users", userRoutes)
//posts route
app.use("/api/v1/posts", postRouter)
//comments route
app.use("/api/v1/comments", commentsRouter)
//categories route
app.use("/api/v1/categories", commentsRouter)

//Error handlers middleware
//Listem to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on ${PORT}`))