const db = require('../config/db.config');
const env = require('../config/env.js');

const Etape = db.etapes;

// Post a step
exports.create = (req, res) => {	
	// Save to MySQL database
	Etape.create({  

	 etape: req.body.etape,
   description: req.body.description
	
  }).then(etape => {		
		// Send created step to client
		res.send(etape);
	});
};
 
// FETCH all Steps
exports.findAll = (req, res) => {
	Etape.findAll({
		include: ["recipe"]
	}).then(etapes => {
	  // Send all Step to Client
	  res.send(etapes);
	});
};

// Find a Step by Id
exports.findById = (req, res) => {	
	Etape.findByPk(req.params.etapeId).then(etape => {
		res.send(etape);
	})
};
 
// Update a Step
exports.update = (req, res) => {
	const id = req.params.etapeId;
	Etape.update( { etape: req.body.etape, description: req.body.description }, 
		{ where: {id: req.params.etapeId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a step with id = ' + id });
	});
};
 
// Delete a Step by Id
exports.delete = (req, res) => {
	const id = req.params.etapeId;
	Etape.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a step with id = ' + id });
	});
};


/*
const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const Etape = db.etapes;
 
// Post a Etape
exports.create = (req, res) => { 
    
 // Save to MySQL database
Etape.create({  
   etape: req.body.etape,
   description: req.body.description,
   
 }).then(etape => { 
 // Send createdetapes to client
 res.send(etape);
 });
};
 
// FETCH alletapess
exports.findAll = (req, res) => {
Etape.findAll({
  include: ["recipe"]


  }).then(etapes => {
   // Send alletapess to Client
   res.send(etapes);
 });
};
 
// Find aetapes by Id
exports.findOne = (req, res) => { 
Etape.findByPk(req.params.etapeId,
  {
    iinclude: ["recipe"]

  }).then(etape => {
 res.send(etape);
 })
};
 
// Update aetapes
exports.update = (req, res) => {
 const id = req.params.etapeId;
Etape.update( { etape: req.body.etape, description: req.body.description }, 
 { where: {id: req.params.etapeId} }
 ).then(() => {
 res.status(200).send({ message: 'updated successfully aetapes with id = ' + id });
 });
};
 
// Delete aetapes by Id
exports.delete = (req, res) => {
 const id = req.params.etapeId;
Etape.destroy({
   where: { id: id }
 }).then(() => {
   res.status(200).send({ message: 'deleted successfully aetapes with id = ' + id });
 });
};

*/