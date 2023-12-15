const express = require('express');
const userRoutes =  require('./routes/users/userRoutes');
const postRouter = require('./routes/posts/postRoutes');
const commentsRouter = require('./routes/comments/commentsRoutes');

require('dotenv').config();
require('./config/dbConnect');
const app = express();

app.use(express.json());


//------------------------
// -------middlewares----------
//------------------------
// const userAuth = {
//   isLogin: true,
//   isAdmin: false
// }
// app.use((req, res, next) => {
//   if(userAuth.isLogin){
//     next();
//   } else {
//     return res.json({
//       msg: "Invalid login credentials"
//     })
//   }
// });

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