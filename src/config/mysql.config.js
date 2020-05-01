const Sequelize = require('sequelize');

const sequelize = new Sequelize('numbers', 'root', 'thevelopers', {
    host: '34.68.135.105',
    dialect: 'mysql'
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