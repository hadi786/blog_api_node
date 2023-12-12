const mongoose = require('mongoose');

//create schema
const categorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  title: {
    type: String,
    required: [true, 'Title is required']
  }
},
{
  timestamps: true
}
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
