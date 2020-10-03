const axios = require('axios');

const updateRecipeSteps = async (recipeId, recipeSteps) => {
  return axios.patch(`http://localhost:3002/recipes/${recipeId}/recipe-steps`, recipeSteps);
};

module.exports = {
  updateRecipeSteps,
};
