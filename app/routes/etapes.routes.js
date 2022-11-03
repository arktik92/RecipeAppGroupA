module.exports = function(app) {
 
  const etapes = require('../controllers/etapes.controllers');

  // Create a new User
  app.post('/etapes', etapes.create);

  // Retrieve all User
  app.get('/etapes', etapes.findAll);

  // Retrieve a single User by Id
  app.get('/etapes/:etapeId', etapes.findById);

  // Update a User with Id
  app.put('/etapes/:etapeId', etapes.update);

  // Delete a User with Id
  app.delete('/etapes/:etapeId', etapes.delete);

}