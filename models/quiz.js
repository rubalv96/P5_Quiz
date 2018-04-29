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

var quizzes=[
    {id: 1,
    question: "Capital de Italia",
    answer: "Roma"},
    {id: 2,
    question: "Capital de Francia",
    answer: "París"},
    {id: 3,
    question: "Capital de España",
    answer: "Madrid"},
    {id: 4,
    question: "Capital de Portugal",
    answer: "Lisboa"},
];

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