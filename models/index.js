const path = require('path');





//Cargar ORM

const Sequelize = require ('sequelize');


//Usar SQLite 

const sequelize = new Sequelize("sqlite:quiz.sqlite");

//Importar la definición de la tabla de quiz desde quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));
exports.Quiz = Quiz;

//Creacion de la tablas

sequelize.sync()
    .then(()=>{
        console.log ('Bases de Datos creadas satisfactoriamente.');
        
        Quiz.count().then((count) => {
            if (count === 0){
                return Quiz.bulkCreate([
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
                ]) 
            }
        })
        
    })
    .catch(error =>{
        console.log("Error creando las tablas de la base de datos", error);
        process.exit(1);
    });


module.exports = sequelize;