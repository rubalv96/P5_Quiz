var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/*Pagina del autor. */

router.get('/author', function(req, res, next){
  res.render('author', {title: 'Autor'});
})
module.exports = router;
