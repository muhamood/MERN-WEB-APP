const mongoose = require('mongoose');

const db = () => mongoose.connect('mongodb://localhost:5000/mern-web-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = db;