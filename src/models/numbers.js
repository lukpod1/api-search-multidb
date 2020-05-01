const mongoose = require('mongoose');

const numbers = new mongoose.Schema({
    number: Number
})

module.exports = mongoose.model('numbers', numbers);