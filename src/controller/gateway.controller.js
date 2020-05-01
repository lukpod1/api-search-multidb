const { methodsFromDatabases } = require('./../constants');

exports.retrieveDatabase = async (req, res) => {
    const param = req.query.db;
    return res.json(await methodsFromDatabases[param].findAll());
}

exports.fillDatabase = async (req, res) => {
    const param = req.query.db;
    return res.json(await methodsFromDatabases[param].insert());
}