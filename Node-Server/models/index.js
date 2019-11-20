const Sequelize = require('sequelize');

// Create sequalizer instance
const sequelize = new Sequelize(
    'powerrank',    // Database
    'root',         // Username
    'password',     // Password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Import Models
const Player = sequelize.import('player-model');
const Region = sequelize.import('region-model');
const Ranking = sequelize.import('ranking-model');

// 1:1
Ranking.belongsTo(Player, { foreignKey: 'playerID'});
Player.hasOne(Ranking, { foreignKey: 'playerID'});

// 1:Many
Player.belongsTo(Region, { foreignKey: 'regionID'});
Region.hasMany(Player, { foreignKey: 'regionID'});

// Sync models and add default data
sequelize.sync({ force: true }).then(() => {
    Region.create({ regionID: 1, name: 'North England'});
    Region.create({ regionID: 2, name: 'South England'});
    Region.create({ regionID: 3, name: 'Wales'});
    Region.create({ regionID: 4, name: 'Scotland'});
    Region.create({ regionID: 5, name: 'Northern Ireland'});
    Region.create({ regionID: 6, name: 'Republic of Ireland'});
    
    Player.create({ 
        playerTag: 'AimSuper',
        regionID: '3' ,
        Wins: 14,
        Loses: 5,
        Matches: 19,
        Avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    });

    Player.create({ 
        playerTag: 'FuelDuel',
        regionID: '3',
        Wins: 17,
        Loses: 11,
        Matches: 28,
        Avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    });

    Player.create({ 
        playerTag: 'Missmario',
        regionID: '1' ,
        Wins: 6,
        Loses: 17,
        Matches: 23,
        Avatar: "https://randomuser.me/api/portraits/women/54.jpg"
    });

    Player.create({ 
        playerTag: 'AsianNation',
        regionID: '2' ,
        Wins: 20,
        Loses: 15,
        Matches: 35,
        Avatar: "https://randomuser.me/api/portraits/women/18.jpg"
    });

    Player.create({ 
        playerTag: 'Trilla',
        regionID: '2' ,
        Wins: 24,
        Loses: 8,
        Matches: 32,
        Avatar: "https://randomuser.me/api/portraits/women/16.jpg"
    });

    Player.create({ 
        playerTag: 'KingSSB',
        regionID: '4' ,
        Wins: 26,
        Loses: 2,
        Matches: 28,
        Avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    });

    Ranking.create({playerID: 1});
});

// Export models
module.exports = {
    Player,
    Region,
    Ranking
};

