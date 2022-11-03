const db = require('../config/db.config');
const env = require('../config/env.js');

const Ingredient = db.ingredients;

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	Ingredient.create({  
	  name: req.body.name
	}).then(ingredient => {		
		// Send created user to client
		res.send(ingredient);
	});
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	Ingredient.findAll().then(ingredients => {
	  // Send all users to Client
	  res.send(ingredients);
	});
};

// Find a User by Id
exports.findById = (req, res) => {	
	Ingredient.findByPk(req.params.ingredientId).then(ingredient => {
		res.send(ingredient);
	})
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.ingredientId;
	Ingredient.update( { name: req.body.name }, 
		{ where: {id: req.params.ingredientId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a user with id = ' + id });
	});
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.ingredientId;
	Ingredient.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
	});
};





