module.exports = function(app) {
    const materiel = require('../controllers/recettes_ingredients.controller');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/recettes_ingredients", recettes_ingredients.create);

  // Retrieve all Message
  app.get("/recettes_ingredients", recettes_ingredients.findAll);

  // Retrieve a single Message with id
  app.get("/recettes_ingredients/:id", recettes_ingredients.findOne);

  // Update a Message with id
  app.put("/recettes_ingredients/:id", recettes_ingredients.update);

  // Delete a Message with id
  app.delete("/recettes_ingredients/:id", recettes_ingredients.delete);
}