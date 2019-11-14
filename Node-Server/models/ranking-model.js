module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ranking', {
        rankID: {
            type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
        },
        playerID: {
            type: DataTypes.INTEGER,
            references: {
              model: 'player-model',
              key: 'playerID',
            }
        },
    });
}