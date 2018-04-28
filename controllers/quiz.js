const models = require("../models");


//GET /quizzes
exports.index = (req, res, next) =>{
    const quizzes = models.quiz.findAll();
    res.render("quizzes/index.ejs", {quizzes});
};

//GET /quizzes/:quizId
exports.show = (req, res, next) =>{
   const quizId = Number(req.params.quizId);
   const quiz   = models.quiz.findById(quizId);

   if(quiz){
       res.render('quizzes/show', {quiz});
   } else{
       next(new Error('No hay ningún quiz con id= '+ quizId));
   }

};

//GET /quizzes/new
exports.new = (req, res, next) =>{
   
    
};

//GET /quizzes/create
exports.create = (req, res, next) =>{
   
    
};

//GET /quizzes/:quizId/edit
exports.edit = (req, res, next) =>{
   
    
};

//PUT /quizzes/:quizId
exports.update = (req, res, next) =>{
   
    
};

//DELETE /quizzes/:quizId
exports.delete = (req, res, next) =>{
   
    
};

//GET /quizzes/:quizId/play
exports.play = (req, res, next) =>{
   
    
};

//GET /quizzes/:quizId/check
exports.check = (req, res, next) =>{
   
    
};
