const path = require('path');


//Cargar ORM

const Sequelize = require ('sequelize');


//Usar SQLite 

const sequelize = new Sequelize("sqlite:quiz.sqlite");

//Importar la definición de la tabla de quiz desde quiz.js
//var Quiz = sequelize.import(path.join(__dirname,'quiz'));
//exports.Quiz = Quiz;
sequelize.define('quiz',
{
    question:{
        type: Sequelize.STRING,
        validate: {notEmpty: {msg: "La pregunta no debe estar vacía."}
    }},

    answer:{
        type: Sequelize.STRING,
        validate: {notEmpty:{msg: "La respuesta no puede estar vacía."}}
    }

    });

//Creacion de la tablas

sequelize.sync()
    .then(()=>{
        console.log ('Bases de Datos creadas satisfactoriamente.');
        
    })
    .then(() => {
        return sequelize.models.quiz.count();
    })
    .then((count) =>{
        if(count === 0){
            return sequelize.models.quiz.bulkCreate([
                { question: "Pregunta Número 1", answer: "hola" },
                { question: "Capital de Italia", answer: "Roma" },
                { question: "Capital de Francia", answer: "París"},
                { question: "Capital de España", answer: "Madrid"},
                { question: "Capital de Portugal", answer: "Lisboa"}
            ])
        }
    })
    .catch(error =>{
        console.log("Error creando las tablas de la base de datos", error);
        process.exit(1);
    });


module.exports = sequelize;