const recipeConnector = require('../connectors/recipe.connector');
const recipeStepConnector = require('../connectors/recipe-step.connector');
const { BadRequestException } = require('../utils/errors');

const createRecipe = async (recipe) => {
  const response = await recipeConnector.createRecipe(recipe);
  const { lastID } = response.data;
  const recipeSteps = recipe.recipe_steps.split(/[\r\n]+/).map((p, i) => {
    return { step_number: i + 1, step_text: p };
  });
  await recipeStepConnector.updateRecipeSteps(lastID, recipeSteps);
};

const deleteRecipe = async (id) => recipeConnector.deleteRecipe(id);

const getRecipes = async (searchTerm) =>
  (await recipeConnector.getRecipes(searchTerm)).data.map((recipe) => {
    return { ...recipe, short_description: `${recipe.short_description.substring(0, 50)}...` };
  });

const getRecipe = async (id) => recipeConnector.getRecipe(id);

const updateRecipe = async (id, recipe) => recipeConnector.updateRecipe(id, recipe);

module.exports = {
  createRecipe,
  deleteRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
};
