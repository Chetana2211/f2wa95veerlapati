var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var x;

  var random=Math.random();
  console.log(req.query.v);
  x=req.query.x;

  if(x==undefined){
    x=random.toFixed(2);
  }

  let cos=Math.cos(x).toFixed(2)
  let asin=Math.asin(x).toFixed(2)
  let asinh=Math.asinh(x).toFixed(2)

  res.render('computation', { 
    title: 'Computation',
  v1: 'applied to ' + x+ ' is ' + cos,
  v2: 'applied to ' + x + ' is ' + asin,
  v3: 'applied to ' + x + ' is ' + asinh,
 });
});

module.exports = router;
