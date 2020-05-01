
const Sequelize = require('sequelize');

const sequelize = new Sequelize('numbers', 'sqlserver', 'thevelopers', {
    host: '35.190.145.86',
    dialect: 'mssql'
});

sequelize.query("IF OBJECT_ID(N'dbo.numbers', N'U') IS NULL BEGIN CREATE TABLE dbo.numbers (number int not null); END;")
    .then(result => {
        console.log(result)
    })

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;
database.numbers = require('../models/numbers-sequelize')(sequelize, Sequelize);

module.exports = database;