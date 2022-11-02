const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const RecetteIngredient = db.recetteIngredients;
 
// Post 
exports.create = (req, res) => { 
    
 // Save to MySQL database
 RecetteIngredient.create({  
   mesure: req.body.mesure,
   quantite: req.body.quantite,
   
 }).then(recetteIngredient => { 

 // Send createdetapes to client
 res.send(recetteIngredient);
 });
};
 
// FETCH alletapess
exports.findAll = (req, res) => {
RecetteIngredient.findAll().then(recetteIngredients => {
   // Send alletapess to Client
   res.send(recetteIngredients);
 });
};
 
// Find Recetteingredient by Id
exports.findById = (req, res) => { 
    RecetteIngredient.findById(req.params.recetteIngredientId).then(recetteIngredient => {
 res.send(recetteIngredient);
 })
};
 
// Update 
exports.update = (req, res) => {
 const id = req.params.recetteIngredientId;
 RecetteIngredient.update( { meusure: req.body.mesure, quantite: req.body.quantite }, 
 { where: {id: req.params.recetteIngredientId} }
 ).then(() => {
 res.status(200).send({ message: 'updated successfully aetapes with id = ' + id });
 });
};
 
// Delete by Id
exports.delete = (req, res) => {
 const id = req.params.recetteIngredientId;
 RecetteIngredient.destroy({
   where: { id: id }
 }).then(() => {
   res.status(200).send({ message: 'deleted successfully aetapes with id = ' + id });
 });
};

