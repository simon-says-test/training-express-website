const recipeStepConnector = require('../connectors/recipe-step.connector');
const { BadRequestException } = require('../utils/errors');

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
