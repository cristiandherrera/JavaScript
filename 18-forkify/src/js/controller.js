import * as model from "./model.js";
import recipeView from "./views/recipeViews.js";

import "core-js/stable";
import "regenerator-runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    console.log(window.location);

    // Guard clause
    if (!id) return;

    // Render spinner
    recipeView.renderSpinner();

    // Load recipe
    await model.loadRecipe(id);

    // Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = () => recipeView.addRenderHandler(controlRecipes);
init();
