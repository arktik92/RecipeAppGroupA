module.exports = function(app) {
 
    const users = require('../controllers/user.controllers');
 
    // Create a new User
    app.post('/users', users.create);
 
    // Retrieve all User
    app.get('/users', users.findAll);
 
    // Retrieve a single User by Id
    app.get('/users/:userId', users.findById);
 
    // Update a User with Id
    app.put('/users/:userId', users.update);
 
    // Delete a User with Id
    app.delete('/users/:userId', users.delete);

}