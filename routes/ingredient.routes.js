module.exports = function(app) {
    const ingredient = require('../controllers/ingredient.controllers');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/ingredient", ingredient.create);

  // Retrieve all Message
  app.get("/ingredient", ingredient.findAll);

  // Retrieve a single Message with id
  app.get("/ingredient/:id", ingredient.findOne);

  // Update a Message with id
  app.put("/ingredient/:id", ingredient.update);

  // Delete a Message with id
  app.delete("/ingredient/:id", ingredient.delete);
}