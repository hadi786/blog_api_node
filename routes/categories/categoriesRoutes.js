const express = require('express');
const { categoryCtrl, createCategoryCtrl, updateCategoryCtrl, singleCategoryCtrl, deleteCategoryCtrl } = require('../../controllers/categories/categoryCtrl');

const categoriesRouter = express.Router();

// GET/api/v1/categories
categoriesRouter.get("/", categoryCtrl);

// POST/api/v1/categories
categoriesRouter.post("/", createCategoryCtrl);

// PUT/api/v1/categories/:id
categoriesRouter.put("/:id", updateCategoryCtrl);

// GET/api/v1/categories/:id
categoriesRouter.get("/:id", singleCategoryCtrl);

// GET/api/v1/categories/:id
categoriesRouter.delete("/:id", deleteCategoryCtrl);

module.exports = categoriesRouter;