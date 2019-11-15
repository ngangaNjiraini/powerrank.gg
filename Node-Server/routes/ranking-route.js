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

module.exports = router;

