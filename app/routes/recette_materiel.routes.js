module.exports = function(app) {
    const recettes_materiels = require('../controllers/recette_materiel.controllers.js');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/recette_materiel", recette_materiel.create);

  // Retrieve all Message
  app.get("/recette_materiel", recette_materiel.findAll);

  // Retrieve a single Message with id
  app.get("/recette_materiel/:recette_materielId", recette_materiel.findById);

  // Update a Message with id
  app.put("/recette_materiel/:recette_materielId", recette_materiel.update);

  // Delete a Message with id
  app.delete("/recette_materiel/:recette_materielId", recette_materiel.delete);
}