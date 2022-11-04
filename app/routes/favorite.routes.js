module.exports = function(app) {
    const favorites = require('../controllers/favorite.controllers.js');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/favorites", favorites.create);

  // Retrieve all Message
  app.get("/favorites", favorites.findAll);

  // Retrieve a single Message with id
  app.get("/favorites/:favoriteId", favorites.findByPk);

  // Update a Message with id
  app.put("/favorites/:favoriteId", favorites.update);

  // Delete a Message with id
  app.delete("/favorites/:favoriteId", favorites.delete);
}