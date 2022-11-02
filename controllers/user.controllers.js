const db = require('../config/db.config.js')
const env = require('../config/env.js');

const User = db.users;

// Post a User
exports.create = (req, res) => { 
    // Save to MySQL database
    User.create({  
        firstName: req.body.firstName,
        userName: req.body.userName,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
        image: req.body.image,
    }).then(user => { 
    // Send created user to client
    res.send(user);
    });
   };
    
   // FETCH all Users
   exports.findAll = (req, res) => {
    User.findAll().then(users => {
      // Send all users to Client
      res.send(users);
    });
   };
    
   // Find a User by Id
   exports.findOne = (req, res) => { 
    User.findByPk(req.params.userId).then(user => {
    res.send(user);
    })
   };
    
   // Update a User
   exports.update = (req, res) => {
    const id = req.params.userId;
    User.update( { firstName: req.body.firstName,
        userName: req.body.userName,
        email: req.body.email,
        login: req.body.login,
       // password: req.body.password,
        image: req.body.image, }, 
    { where: {id: req.params.userId} }
    ).then(() => {
    res.status(200).send({ message: 'updated successfully a user with id = ' + id });
    });
   };
    
   // Delete a User by Id
   exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
      where: { id: id }
    }).then(() => {
      res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
    });
   };