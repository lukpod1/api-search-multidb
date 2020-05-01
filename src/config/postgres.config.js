const Sequelize = require('sequelize');

const sequelize = new Sequelize('numbers', 'postgres', 'thevelopers', {
    host: '35.243.246.77',
    dialect: 'postgres'
});

sequelize.query('CREATE TABLE IF NOT EXISTS numbers (id serial PRIMARY KEY, number INT);')
    .then(result => {
        console.log(result)
    })

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;
database.numbers = require('../models/numbers-sequelize')(sequelize, Sequelize);

module.exports = database;