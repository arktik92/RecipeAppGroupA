module.exports = function(app) {
    const recipes = require('../controllers/recipe.controllers.js');

    // Create a new Message
  app.post("/recipes", recipes.create);

  // Retrieve all Message
  app.get("/recipes", recipes.findAll);

  // Retrieve a single Message with id
  app.get("/recipes/:id", recipes.findOne);

  // Update a Message with id
  app.put("/recipes/:id", recipes.update);

  // Delete a Message with id
  app.delete("/recipes/:id", recipes.delete);
}