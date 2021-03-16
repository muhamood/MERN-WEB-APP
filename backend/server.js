
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
   return res.send('Hello world, Welcome to MERN web App');
});

app.listen(PORT, () => console.log(`Serving running on port ${PORT}`));
