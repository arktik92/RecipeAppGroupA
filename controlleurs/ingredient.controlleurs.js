const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const Ingredient = db.ingredients;
 
// Post an Ingredient
exports.create = (req, res) => { 
 // Save to MySQL database
 Ingredient.create({  
   name: req.body.name
 }).then(ingredient => { 
 // Send created ingredient to client
 res.send(ingredient);
 });
};
 
// FETCH all Ingredients
exports.findAll = (req, res) => {
 Ingredient.findAll().then(ingredients => {
   // Send all ingredients to Client
   res.send(ingredients);
 });
};
 
// Find an Ingredient by Id
exports.findById = (req, res) => { 
 Ingredient.findById(req.params.ingredientID).then(ingredient => {
 res.send(ingredient);
 })
};
 
// Update an Ingredient
exports.update = (req, res) => {
 const id = req.params.ingredientID;
 Ingredient.update( { name: req.body.name }, 
 { where: {id: req.params.ingredientID} }
 ).then(() => {
 res.status(200).send({ message: 'updated successfully an ingredient with id = ' + id });
 });
};
 
// Delete an Ingredient by Id
exports.delete = (req, res) => {
 const id = req.params.ingredientID;
 Ingredient.destroy({
   where: { id: id }
 }).then(() => {
   res.status(200).send({ message: 'deleted successfully an ingredient with id = ' + id });
 });
};