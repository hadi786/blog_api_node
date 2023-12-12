const mongoose = require('mongoose');

//create schema
const commentSchema = new mongoose.Schema({
  post: {
    type: String,
    ref: "Post",
    required: [true, 'Post is required']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  description: {
    type: String,
    required: [true, 'Comment description is required']
  }
},
{
  timestamps: true
}
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
