var express = require('express');
var router = express.Router();

var quizzes = require ('./models/index.js');
exports.quizzes = quizzes;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/*GET Pagina del autor. Creditos */

router.get('/credits', function(req, res, next){
  res.render('credits', {title: 'Autor'});
})


/*GET listar los quizzes*/

router.get('/quizzes', function(req,res,next){
  res.render('quizzes', quizzes.findAll() )
})
module.exports = router;

