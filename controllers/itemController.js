const Item = require("../models/item");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require('express-validator')
const mongoose = require('mongoose')



exports.item_list = asyncHandler(async (req, res, next) => {
    const allItems = await Item.find({}, "name price description category")
    .sort({ name: 1 })
    .populate("name")
    .exec();


    res.render("item_list", {title: "All of the items:", items_list: allItems})
})

exports.item_detail = asyncHandler(async (req, res, next) => {
    const item = await Item.findById(req.params.id).exec();
    

    // console.log('asd')

    if (item === null) {
      // No results.
      const err = new Error("Category not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("item_detail", {
      title: "Item Detail",
      item: item,
    });
  });
  
