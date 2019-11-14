module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ranking', {
        rankID: {
            type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
        }
    }, { timestamps: false});
}