const credentials = require('./credentials/mongodb.json');
const express = require("express");
const mongoose = require("mongoose");
const mysql = require('./config/mysql.config');
const postgres = require('./config/postgres.config');
const mssql = require('./config/mssql.config');

const server = express();

const port = 3000;

mongoose.connect(credentials["mongo-uri"], {
    useNewUrlParser: true
})

mysql.sequelize.authenticate()
    .then(() => {
        console.log('Connection to the MySQL database successfully established.');
    })
    .catch(err => {
        console.error('Unable to connect to the MySQL database:', err);
    });

postgres.sequelize.authenticate()
    .then(() => {
        console.log('Connection to the Postgres database successfully established.');
    })
    .catch(err => {
        console.error('Unable to connect to the Postgres database:', err);
    });

mssql.sequelize.authenticate()
    .then(() => {
        console.log('Connection to the SQL Server database successfully established.');
    })
    .catch(err => {
        console.error('Unable to connect to the SQL Server database:', err);
    });


server.use(express.json());
server.use(require('./routes'));

server.listen(port, () => {
    console.log(`:) Server runnig on port ${port}`)
})