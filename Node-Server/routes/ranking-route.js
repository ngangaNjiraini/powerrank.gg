const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/all', async (_req, res) => {
    const result = await models.Ranking.findAll({
        include: [
            {
                model: models.Player
            }
        ]
    });
    res.send(result);
});

module.exports = router;

