module.exports = function(app) {
    const materiels = require('../controllers/materiel.controllers');

    // Create a new Message
  app.post("/materiels", materiels.create);

  // Retrieve all Message
  app.get("/materiels", materiels.findAll);

  // Retrieve a single Message with id
  app.get("/materiels/:id", materiels.findOne);

  // Update a Message with id
  app.put("/materiels/:id", materiels.update);

  // Delete a Message with id
  app.delete("/materiels/:id", materiels.delete);
}