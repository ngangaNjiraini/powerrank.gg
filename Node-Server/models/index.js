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
Ranking.belongsTo(Player);
Player.hasOne(Ranking);

// 1:Many
Player.belongsTo(Region);
Region.hasMany(Player);

// Sync models and add default data
sequelize.sync({ force: true }).then(() => {
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

    Region.create({ name: 'North England'});
    Region.create({ name: 'South England'});
    Region.create({ name: 'Scotland'});
    Region.create({ name: 'Wales'});

    Ranking.create({playerID: 6});
    Ranking.create({playerID: 5});
    Ranking.create({playerID: 1});
    Ranking.create({playerID: 2});
    Ranking.create({playerID: 4});
    Ranking.create({playerID: 3});
});

// Export models
module.exports = {
    Player,
    Region,
    Ranking
};

