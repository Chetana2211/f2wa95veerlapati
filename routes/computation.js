var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var v;

  var random=Math.random();
  console.log(req.query.v);
  x=req.query.v;

  if(v==undefined){
    v=random.toFixed(2);
  }

  let cos=Math.cos(v).toFixed(2)
  let asin=Math.asin(v).toFixed(2)
  let asinh=Math.asinh(v).toFixed(2)

  res.render('computaion', { 
    title: 'Computation',
  Calculate: 'applied to ' + v+ ' is ' + cos,
  c1: 'applied to ' + v + ' is ' + asin,
  c2: 'applied to ' + v + ' is ' + asinh,
 });
});

module.exports = router;
