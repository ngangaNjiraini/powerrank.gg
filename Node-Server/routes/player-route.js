const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/all', async (_req, res) => {
    const result = await models.Player.findAll({
        include: [
            {
                model: models.Region
            }
        ]
    });
    res.send(result);
});

router.get('/:index', async (req, res) => {
    const [first = null] = await models.Player.findAll({
        where: { playerID: req.params.index },
        include: [{ model: models.Region }]
    });
    if (first) {
        res.send(first);
    } else {
        res.status(404).send({ message: 'Item not found for index ' + req.params.index });
    }
});

router.get('/searchTag/:name', async (req, res) => {
    const [first = null] = await models.Player.findAll({
        where: { playerTag: req.params.name },
        include: [{ model: models.Region }]
    });
    if (first) {
        res.send(first);
    } else {
        res.status(404).send({ message: 'Item not found for index ' + req.params.index });
    }
});

router.post('/add', async (req, res) => {
    try {
        await models.Player.create(req.body);
        res.send();
    } catch (exc) {
        next(exc);
    }
});

module.exports = router;