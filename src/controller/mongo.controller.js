const Numbers = require('./../models/numbers');
const service = require("./../services/mongo.service");

module.exports = {
    async findAll(req, res) {
       const numbers = await service.findAll();

       return res.json(numbers);
    },

    async insertMany(req, res) {

        const numbers = await Numbers.insertMany(service.generateNumberStructure());

        return res.json(numbers);
    }
}