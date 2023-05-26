var express = require('express');
var router = express.Router();

const category_controller = require('../controllers/categoryController')
const item_controller = require('../controllers/itemController');

//get request for / -> welcome to: ...
router.get("/", item_controller.item_list);

//get req / one category
router.get("/:id", item_controller.item_detail);

module.exports = router;