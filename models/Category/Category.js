const mongoose = require('mongoose');

//create schema
const categorisSchema = new mongoose.Schema({
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

const Categories = mongoose.model('Categories', categorisSchema);
module.exports = Categories;
