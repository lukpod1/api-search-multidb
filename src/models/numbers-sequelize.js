module.exports = (sequelize, Sequelize) => {
    const Numbers = sequelize.define('numbers', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: Sequelize.INTEGER,
        }
    }, {
        freezeTableName: true,
        tableName: 'numbers',
        timestamps: false
    });

    return Numbers;
}

