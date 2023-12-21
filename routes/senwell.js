var express = require('express');
var router = express.Router();
const {getData}=require("../controller/data")
/* GET home page. */
router.get("/static-data", getData);

module.exports = router;
