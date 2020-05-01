const Numbers = require('./../models/numbers');

exports.findAll = async () => {
    const documents = await Numbers.find();
    const arr = []
    documents.forEach(field => {
        arr.push(field.number)
    })
    
    return arr;
}

exports.insert = async () => {

    const numbers = await Numbers.insertMany(this.generateNumberStructure);

    return numbers;
}

exports.generateNumberStructure = () => {
    const structure = [];
    for (let index = 1; index <= 600; index++) {
        structure.push({ number: generateNumbers() })
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
