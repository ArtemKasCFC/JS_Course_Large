import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

if (module.hot) module.hot.accept();

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 2. Rendering recipe
    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = await searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    const { results } = model.state.search;

    resultsView.render(results);
  } catch (err) {
    resultsView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
