// There is currently no real logic in this module but input validation should go here

const recipeStepConnector = require('../connectors/recipe-step.connector');

const createRecipeStep = async (recipeStep) => recipeStepConnector.createRecipeStep(recipeStep);

const deleteRecipeStep = async (id) => recipeStepConnector.deleteRecipeStep(id);

const getRecipeSteps = async (recipeId) => recipeStepConnector.getRecipeSteps(recipeId);

const getRecipeStep = async (id) => recipeStepConnector.getRecipeStep(id);

module.exports = {
  createRecipeStep,
  deleteRecipeStep,
  getRecipeSteps,
  getRecipeStep,
};
