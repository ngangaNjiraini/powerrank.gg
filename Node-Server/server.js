const express = require('express');
const cors = require('cors');
const playerRouter = require('./routes/player-route');
const rankingRouter = require('./routes/ranking-route');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/players', playerRouter);
app.use('/ranking', rankingRouter);

app.use((err, req, res, next) => {
    res.status(500).send({
        message: 'Something went wrong',
        error: err
    });
});

app.listen(8080, () => {
    console.log('Server running on port 8080.')
});
