const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const chefs = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running');
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find((chef) => chef.id === id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`this server is running on port: ${port}`);
})