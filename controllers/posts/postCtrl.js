
// all post list
const postCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All Posts route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// create post
const createPostCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "post created"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// update post
const updatePostCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "update Post route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// single post details
const singlePostCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "Single Post route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// delete post
const deletePostCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "delete Post route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

module.exports = {
  postCtrl,
  createPostCtrl,
  updatePostCtrl,
  singlePostCtrl,
  deletePostCtrl
}