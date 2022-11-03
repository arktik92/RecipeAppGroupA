const { users, recipes, favorites } = require('../config/db.config');
const db = require('../config/db.config');
const env = require('../config/env.js');

const Favorite = db.favorites;

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	Favorite.create({  
    recipeId: req.body.recipeId,
    userId: req.body.ingredientId
	}).then(favorites => {		
		// Send created user to client
		res.send(Favorite);
	});
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	Favorite.findAll({
    include: ["recipes", "users"]
  }).then(favorites => {
	  // Send all users to Client
	  res.send(Favorite);
	});
};

// Find a User by Id
exports.findById = (req, res) => {	
Favorite.findByPk(req.params.favoriteId, {
    include: ["recipes", "users"]
  }).then(favorites => {
		res.send(favorites);
	})
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.favoritesId;
	Favorite.update( {}, 
		{ where: {id: req.params.favoritesId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a user with id = ' + id });
	});
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.fovaritesId;
	Favorite.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
	});
};



