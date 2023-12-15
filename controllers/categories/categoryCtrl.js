// all category list
const categoryCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All categories route"
    })
  } catch (error) {
    res.json(error.messages)
  }
}

// create category
const createCategoryCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "categories created"
    })
  } catch (error) {
    res.json(error.messages)
  }
}

// update category
const updateCategoryCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "update categories route"
    })
  } catch (error) {
    res.json(error.messages)
  }
}

// single category details
const singleCategoryCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "Single categories route"
    })
  } catch (error) {
    res.json(error.messages)
  }
}

// delete category
const deleteCategoryCtrl = async(req, res) => {
  try {
    res.json({
      status: "Success",
      data: "delete categories route"
    })
  } catch (error) {
    res.json(error.messages)
  }
}

module.exports = {
  categoryCtrl,
  createCategoryCtrl,
  updateCategoryCtrl,
  singleCategoryCtrl,
  deleteCategoryCtrl
}