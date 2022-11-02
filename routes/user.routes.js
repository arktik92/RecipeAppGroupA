module.exports = function(app) {
 
    const users = require('../controllers/user.controllers.js');
 
    // Create a new User
    app.post('/users', users.create);
 
    // Retrieve all User
    app.get('/users', users.findAll);
 
    // Retrieve a single User by Id
    app.get('/users/:userId', users.findOne);
 
    // Update a User with Id
    app.put('/users/:userId', users.update);
 
    // Delete a User with Id
    app.delete('/users/:userId', users.delete);
}