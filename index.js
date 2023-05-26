const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const shapeData = require('./data/data.json')
const recipesData = require('./data/recipeData.json')


app.get('/', (req, res) => {
    res.send('This server is is running on port ' + port)
})

app.get('/shapes', (req, res) => {
    res.send(shapeData)
})

app.get('/recipes', (req, res) => {
    res.send(recipesData)
})

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const recipeData = recipesData.filter(recipe => parseInt(recipe.chef_id) === id);
    res.send(recipeData)
})

app.listen(port, () => {
    console.log(`shape recipe is running on: ${port}`)
})

