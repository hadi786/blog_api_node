
// all comments list
const commentCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All comments route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// create comment
const createCommentCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "comments created"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// update comments
const updateCommentCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "update comments route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// single comments list
const singleCommentCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All comments route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

// delete comments
const deleteCommentCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "delete comments route"
    })
  } catch (error) {
    res.json(error.messages)
  }
};

module.exports = {
  commentCtrl,
  createCommentCtrl,
  updateCommentCtrl,
  singleCommentCtrl,
  deleteCommentCtrl
}