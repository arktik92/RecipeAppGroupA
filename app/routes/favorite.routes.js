module.exports = function(app) {
    const favorite = require('../controllers/favorite.controllers.js');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/favorite", favorite.create);

  // Retrieve all Message
  app.get("/favorite", favorite.findAll);

  // Retrieve a single Message with id
  app.get("/favorite/:favoriteId", favorite.findById);

  // Update a Message with id
  app.put("/favorite/:favoriteId", favorite.update);

  // Delete a Message with id
  app.delete("/favorite/:favoriteId", favorite.delete);
}