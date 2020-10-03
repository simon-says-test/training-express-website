const axios = require('axios');
const { BadRequestException } = require('../utils/errors');

const createRecipe = async (recipe) => axios.post(`http://localhost:3002/recipes`, recipe);

const deleteRecipe = async (id) => {};

const getRecipes = async (searchTerm) => {
  const searchUrlPart = searchTerm ? `search=${searchTerm}` : '';
  return axios.get(`http://localhost:3002/recipes${searchUrlPart}`);
};

const getRecipe = async (id) => {};

const updateRecipe = async (id, recipe) => {};

module.exports = {
  createRecipe,
  deleteRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
};
