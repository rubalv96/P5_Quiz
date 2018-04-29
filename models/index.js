var Quiz = require("./quiz");
exports.Quiz = Quiz;

//Cargar ORM

const Sequelize = require ('sequelize');


//Usar SQLite 

const sequelize = new Sequelize("sqlite:quiz.sqlite");

//Importar la definición de la tabla de quiz desde quiz.js
sequelize.import(path.join(__dirname, 'quiz'));

//Creacion de la tablas

sequelize.sync()
    .then(()=> console.log ('Bases de Datos creadas satisfactoriamente.'))
    .catch(error =>{
        console.log("Error creando las tablas de la base de datos", error);
        process.exit(1);
    });


module.exports = sequelize;