const db = require('../config/db.config');
const env = require('../config/env.js');

const RecetteIngredient = db.recetteIngredients;

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	RecetteIngredient.create({  
	  mesure: req.body.mesure,
   quantite: req.body.quantite
	}).then(recetteIngredient => {		
		// Send created user to client
		res.send(recetteIngredient);
	});
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	RecetteIngredient.findAll().then(recetteIngredients => {
	  // Send all users to Client
	  res.send(recetteIngredients);
	});
};

// Find a User by Id
exports.findById = (req, res) => {	
	RecetteIngredient.findByPk(req.params.recetteIngredientId).then(recetteIngredient => {
		res.send(recetteIngredients);
	})
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.recetteIngredientId;
	RecetteIngredient.update( {  meusure: req.body.mesure, quantite: req.body.quantite }, 
		{ where: {id: req.params.recetteIngredientId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a user with id = ' + id });
	});
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.recetteIngredientId;
	RecetteIngredient.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
	});
};



