const db = require('../config/db.config');
const env = require('../config/env.js');

const Materiel = db.materiels;

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	Materiel.create({  
	 name: req.body.name
	}).then(materiel => {		
		// Send created user to client
		res.send(materiel);
	});
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	Materiel.findAll().then(materiels => {
	  // Send all users to Client
	  res.send(materiels);
	});
};

// Find a User by Id
exports.findById = (req, res) => {	
	Materiel.findByPk(req.params.materielId).then(materiel => {
		res.send(materiel);
	})
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.materielId;
	Materiel.update( { name: req.body.name }, 
		{ where: {id: req.params.materielId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a user with id = ' + id });
	});
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.materielId;
	Materiel.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
	});
};





