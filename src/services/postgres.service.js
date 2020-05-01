const postgres = require("./../config/postgres.config");
const Numbers = postgres.numbers;

exports.findAll = async () => {
    const numbers = [] 
    const arr = []
    numbers.push(await Numbers.findAll({
        attributes: ['number']
    }))
    numbers.forEach(r => {
        for (let index = 0; index < 600; index++) {
            arr.push(r[index].dataValues.number);
        }
    })
    return arr;
}

exports.insert = async () => {
    const arr = [];
    for (let index = 1; index <= 600; index++) {
        await postgres.sequelize.query('INSERT INTO numbers (number) VALUES (:number);',
            { replacements: { number: this.generateNumbers() }, type: postgres.sequelize.QueryTypes.INSERT }
        ).then(numbers => {
            arr.push(numbers);
        })
    }
    return arr;
}

exports.generateNumberStructure = () => {
    const structure = [];
    for (let index = 1; index <= 600; index++) {
        structure.push({ number: this.generateNumbers() })
    }
    return structure;
}

exports.generateNumbers = () => {
    const code = [];
    for (let index = 0; index < 4; index++) {
        code.push(Math.floor(Math.random() * 9) + 1);
    }
    return parseInt(code.join(""));
}