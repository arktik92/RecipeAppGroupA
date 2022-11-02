const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const Materiel = db.materiels;
 
// Post a Materiel
exports.create = (req, res) => { 
 // Save to MySQL database
 Materiel.create({  
   name: req.body.name
 }).then(materiel => { 
 // Send created materiel to client
 res.send(materiel);
 });
};
 
// FETCH all Materiels
exports.findAll = (req, res) => {
 Materiel.findAll().then(materiels => {
   // Send all materiels to Client
   res.send(materiels);
 });
};
 
// Find a Materiel by Id
exports.findById = (req, res) => { 
 Materiel.findById(req.params.materielId).then(materiel => {
 res.send(materiel);
 })
};
 
// Update a Materiel
exports.update = (req, res) => {
 const id = req.params.materielId;
 Materiel.update( { name: req.body.name }, 
 { where: {id: req.params.materielId} }
 ).then(() => {
 res.status(200).send({ message: 'updated successfully a materiel with id = ' + id });
 });
};
 
// Delete a Materiel by Id
exports.delete = (req, res) => {
 const id = req.params.materielId;
 Materiel.destroy({
   where: { id: id }
 }).then(() => {
   res.status(200).send({ message: 'deleted successfully a materiel with id = ' + id });
 });
};