
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require('./database');

app.get('/', (req, res) =>{
   return res.send('Hello world, Welcome to MERN web App');
});

db().then(console.log('Database started successfully'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Serving running on port ${PORT}`));
