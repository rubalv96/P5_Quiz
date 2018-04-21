var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/*GET Pagina del autor. Creditos */

router.get('/credits', function(req, res, next){
  res.render('credits', {title: 'Autor'});
})


module.exports = router;

