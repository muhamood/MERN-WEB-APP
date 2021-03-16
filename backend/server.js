
const express = require('express');
const app = express();
const todoRouter = require('./todo');
const PORT = process.env.PORT || 6000;
const db = require('./database');

app.use('/', todoRouter);

db().then(console.log('Database started successfully'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Serving running on port ${PORT}`));
