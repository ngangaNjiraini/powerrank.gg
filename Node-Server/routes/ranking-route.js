const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/all', async (_req, res) => {
    const result = await models.Ranking.findAll({
        order: [
            ['rankID', 'ASC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
        ],
        include: [
            {
                model: models.Player
            }
        ]
    });
    res.send(result);
});

router.post('/add', async (req, res) => {
    try {
        await models.Ranking.create(req.body);
        res.send("Player Added");
    } catch (err) {
        console.log(err);
    }
});

router.delete('/clear/all', async (req, res) => {
    try {
        await models.Ranking.destroy({
            where: {},
            truncate: true
        });
        res.send("All Players Deleted!");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

