module.exports = (sequelize, DataTypes) => {
    return sequelize.define('region', {
        regionID: {
            type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, { timestamps: false});
}
