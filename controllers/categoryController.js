const Category = require("../models/category");
const Item = require('../models/item')
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require('express-validator')
const mongoose = require('mongoose')




exports.category_list = asyncHandler(async (req, res, next) => {
    const allCategories = await Category.find({}, "name")
    .sort({ name: 1 })
    .populate("name")
    .exec();


    res.render("category_list", {title: "All of the categories:", category_list: allCategories})
})

exports.category_detail = asyncHandler(async (req, res, next) => {
    // Get details of author and all their books (in parallel)
    const [category, allItemsByCategory] = await Promise.all([
      Category.findById(req.params.id).exec(),
      Item.find({ category: req.params.id }, "name price").exec(),
    ]);
  
    if (category === null) {
      // No results.
      const err = new Error("Category not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("category_detail", {
      title: "Category Detail",
      category: category,
      category_items: allItemsByCategory,
    });
  });
  
