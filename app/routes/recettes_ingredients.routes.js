module.exports = function(app) {
    const recettes_ingredients = require('../controllers/recette_ingredient.controllers.js');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/recettes_ingredients", recettes_ingredients.create);

  // Retrieve all Message
  app.get("/recettes_ingredients", recettes_ingredients.findAll);

  // Retrieve a single Message with id
  app.get("/recettes_ingredients/:recette_ingredientid", recettes_ingredients.findById);

  // Update a Message with id
  app.put("/recettes_ingredients/:recette_ingredientid", recettes_ingredients.update);

  // Delete a Message with id
  app.delete("/recettes_ingredients/:recette_ingredientid", recettes_ingredients.delete);
}