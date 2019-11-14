module.exports = (sequelize, DataTypes) => {
    return sequelize.define('players', {
        playerID: {
            type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
        },
        playerTag: {
            type: DataTypes.STRING
        },
        Wins: {
            type: DataTypes.INTEGER
        },
        Loses: {
            type: DataTypes.INTEGER
        },
        Matches: {
            type: DataTypes.INTEGER
        },
        Avatar: {
            type: DataTypes.STRING
        },
    }, { timestamps: false});
}