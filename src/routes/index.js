/* var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;  */

var express = require('express');
var router = express.Router();
const {index,detalle} = require("../controllers/indexControllers")


/* GET home page. */
router.get("/", index);
router.get("/detalle/:id", detalle);
module.exports = router;

