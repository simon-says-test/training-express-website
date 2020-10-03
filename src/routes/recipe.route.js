const express = require('express');
const recipeController = require('../controllers/recipe.controller');
const { CustomException, NotFoundException } = require('../utils/errors');

const router = express.Router();

router.get('/create', async (req, res) => {
  res.render('create-edit');
});

router.post('/create', async (req, res, next) => {
  try {
    const result = await recipeController.createRecipe(req.body);
    res.redirect('/recipes');
  } catch (err) {
    next(new CustomException('Unable to create recipe', err));
  }
});

router.delete('/:id', async (req, res) => {
  const result = await recipeController.deleteRecipe(req.params.id);
  res.status(200).send(result);
});

router.get('/', async (req, res, next) => {
  try {
    const searchTerm = req.query.search;
    const result = await recipeController.getRecipes(searchTerm);
    res.status(200).render('index', { recipes: result });
  } catch (err) {
    next(new CustomException('Unable to get recipes', err));
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await recipeController.getRecipe(req.params.id);
    if (!recipe) {
      throw new NotFoundException('recipe not found');
    }
    res.send(recipe);
  } catch (e) {
    next(e);
  }
});

router.put('/:id', async (req, res) => {
  res.send(await recipeController.updateRecipe(req.params.id, req.body));
});

module.exports = router;
