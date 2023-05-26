var express = require('express');
var router = express.Router();

const category_controller = require('../controllers/categoryController')
const item_controller = require('../controllers/itemController');

//get request for / -> welcome to: ...
router.get("/", category_controller.category_list);

// get req / one category
router.get("/:id", category_controller.category_detail);
//NOT GOOD


module.exports = router;