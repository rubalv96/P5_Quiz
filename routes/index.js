var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/*Pagina del autor. */

router.get('/credits', function(req, res, next){
  res.render('credits', {title: 'Autor'});
})
module.exports = router;

