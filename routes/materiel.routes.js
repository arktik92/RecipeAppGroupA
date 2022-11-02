module.exports = function(app) {
    const materiel = require('../controllers/materiel.controller');
    // var router = require('express').Router();

    // Create a new Message
  app.post("/materiel", materiel.create);

  // Retrieve all Message
  app.get("/materiel", materiel.findAll);

  // Retrieve a single Message with id
  app.get("/materiel/:id", materiel.findOne);

  // Update a Message with id
  app.put("/materiel/:id", materiel.update);

  // Delete a Message with id
  app.delete("/materiel/:id", materiel.delete);
}