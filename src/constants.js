const mongodb = require("./services/mongo.service");
const mysql = require("./services/mysql.service");
const postgres = require("./services/postgres.service");
const mssql = require("./services/mssql.service");

exports.methodsFromDatabases = {
    mongodb: mongodb,
    mysql: mysql,
    postgres: postgres,
    mssql: mssql
}