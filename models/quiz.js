//Modelo


module.exports = function(sequelize, DataTypes){
    return sequelize.define('quiz',
{
    question:{
        type: DataTypes.STRING,
        validate: {notEmpty: {msg: "La pregunta no debe estar vacía."}
    }},

    answer:{
        type: DataTypes.STRING,
        validate: {notEmpty:{msg: "La respuesta no puede estar vacía."}}
    }

    }
    );
}



//Creacion de un nuevo quiz con el valor pasado

exports.create =(quiz) =>{

};


//Actualiza un quiz con los valores pasados
exports.update = (quiz) =>{

};

// Devuelve todos los quiz

exports.findAll =() =>{
    return quizzes;
}
//Busca un quiz por su id

exports.findById=(id) =>{

};


//Elimina el quiz 

exports.destroy = (quiz) =>{

};