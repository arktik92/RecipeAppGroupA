module.exports = function(app) {
 
  const steps = require('../controllers/step.controllers');

  // Create a new User
  app.post('/steps', steps.create);

  // Retrieve all User
  app.get('/steps', steps.findAll);

  // Retrieve a single User by Id
  app.get('/steps/:stepId', steps.findById);

  // Update a User with Id
  app.put('/steps/:stepId', steps.update);

  // Delete a User with Id
  app.delete('/steps/:stepId', steps.delete);

}