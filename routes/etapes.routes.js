module.exports = function(app) {
    const etapes = require('../controllers/etapes.controller');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/etapes", etapes.create);

  // Retrieve all Message
  app.get("/etapes", etapes.findAll);

  // Retrieve a single Message with id
  app.get("/etapes/:id", etapes.findOne);

  // Update a Message with id
  app.put("/etapes/:id", etapes.update);

  // Delete a Message with id
  app.delete("/etapes/:id", etapes.delete);
}