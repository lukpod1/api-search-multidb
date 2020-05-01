const credentials = require('./../credentials/mongodb.json');
const express = require("express");
const mongoose = require("mongoose");

const server = express();

const port = 3000;

mongoose.connect(credentials["mongo-uri"], {
    useNewUrlParser: true
})

server.use(express.json());
server.use(require('./../routes'));

server.listen(port, () => {
    console.log(`:) Server runnig on port ${port}`)
})