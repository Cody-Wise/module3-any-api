const { Router } = require('express');

const Star_War = require('../models/Star-War');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingHero = await Star_War.getById(id);
    res.json(matchingHero);
  })

  .get('/', async (req, res) => {
    const dataHeroes = await Star_War.getAll();
    res.json(dataHeroes);
  });
