const db = require('../config/db.config');
const env = require('../config/.env.js');

const Step = db.steps;

// Post a step
exports.create = (req, res) => {	
	// Save to MySQL database
	Step.create({  
	etape: req.body.etape,
    description: req.body.description,
	recipeId: req.body.recipeId
  }).then(step => {		
		// Send created step to client
		res.send(step);
	});
};
 
// FETCH all Steps
exports.findAll = (req, res) => {
	Step.findAll({
		include: ["recipes"]
	}).then(steps => {
	  // Send all Step to Client
	  res.send(steps);
	});
};

// Find a Step by Id
exports.findById = (req, res) => {	
	Step.findByPk(req.params.stepId, {
		include: ["recipes"]
	}).then(step => {
		res.send(step);
	})
};
 
// Update a Step
exports.update = (req, res) => {
	const id = req.params.stepId;
	Step.update( { etape: req.body.etape, description: req.body.description }, 
		{ where: {id: req.params.stepId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a step with id = ' + id });
	});
};
 
// Delete a Step by Id
exports.delete = (req, res) => {
	const id = req.params.stepId;
	Step.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a step with id = ' + id });
	});
};
