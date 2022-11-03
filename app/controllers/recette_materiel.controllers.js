const { materiels, recipes } = require('../config/db.config');
const db = require('../config/db.config');
const env = require('../config/env.js');

const RecetteMateriels = db.recettes_materiels;

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	RecetteMateriels.create({  
    recipeId: req.body.recipeId,
    materielId: req.body.ingredientId
	}).then(RecetteMateriels => {		
		// Send created user to client
		res.send(RecetteMateriels);
	});
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	RecetteMateriels.findAll({
    include: ["recipes", "materiels"]
  }).then(RecetteMateriels => {
	  // Send all users to Client
	  res.send(RecetteMateriels);
	});
};

// Find a User by Id
exports.findById = (req, res) => {	
	RecetteMateriels.findByPk(req.params.recette_materielId, {
    include: ["recipes", "materiels"]
  }).then(recetteMateriels=> {
		res.send(recetteMateriels);
	})
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.recetteMaterielId;
	RecetteMateriels.update( { }, 
		{ where: {id: req.params.recette_materielId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a user with id = ' + id });
	});
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.recette_materielId;
	RecetteMateriels.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
	});
};



