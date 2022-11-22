module.exports = function(app) {
 
  const recipes = require('../controllers/recipe.controllers');

  // Create a new User
  app.post('/recipes', recipes.create);

  // Retrieve all User
  app.get('/recipes', recipes.findAlsl);

  // Retrieve a single User by Id
  app.get('/recipes/:recipeId', recipes.findById);

  // Update a User with Id
  app.put('/recipes/:recipeId', recipes.update);

  // Delete a User with Id
  app.delete('/recipes/:recipeId', recipes.delete);

}