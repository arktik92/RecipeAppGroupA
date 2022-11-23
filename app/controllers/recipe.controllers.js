const { ingredients } = require('../config/db.config');
const db = require('../config/db.config');
const Ingredients = db.ingredients
const Op = db.Sequelize.Op
const Recipe = db.recipes;


// Post Recipe
exports.create = (req, res) => {	
	// Save to MySQL database
	Recipe.create({  
        title: req.body.title,
        time: req.body.time,
        difficulty: req.body.difficulty,
        category: req.body.category,
        season: req.body.season,
        image: req.body.image,
        price: req.body.price,
		userId: req.body.userId
	})
	
	.then(recipe => {
		if (req.body.ingredients) {
		  Ingredients.findAll({
			where: {
			  name: {
				[Op.or]: req.body.ingredients
			  }
			}
		  })

		  .then(ingredients => {
			console.log("xxxx" + ingredients);

			try {
				for (let i = 0; i < req.body.ingredients.length; i++) {
							if (ingredients.length === 0 ) {
							Ingredients.create({
								name: req.body.ingredients[i]
								
							}).then(() => {
								console.log("xxx" + ingredients);
								recipe.addIngredients(ingredients, { through: { quantity: req.body.quantity, unity: req.body.unity } }).then(() => {
								  res.send({ message: "recipe and ingredient was added successfully!" });
								})
							})
						} else {
							try {
								recipe.addIngredients(ingredients, { through: { quantity: req.body.quantity, unity: req.body.unity }
								}).then(() => {
									res.send({ message: "recipe was added successfully!" })
								})
							} catch (error) {
								console.log(error)
							}
							
						}
						}
					
					} catch (error) {
						console.log(error);
					}
				  


		  })
		
		}
	  })

	}
// exports.create = (req, res) => {	
// 	// Save to MySQL database
// 	Recipe.create({  
//         title: req.body.title,
//         time: req.body.time,
//         difficulty: req.body.difficulty,
//         category: req.body.category,
//         season: req.body.season,
//         image: req.body.image,
//         price: req.body.price,
// 		userId: req.body.userId
// 	}).then(recipe => {		
// 		// Send created user to client
// 		res.send(recipe);
// 	});
// };
 
// FETCH all Users
exports.findAll = (req, res) => {
	Recipe.findAll({
		include: ["users" , "ingredients"/*, "materiels", "steps", "favorites"*/]
	}).then(recipes => {
	  // Send all users to Client
	  res.send(recipes);
	});
};

// Find a User by Id
exports.findById = (req, res) => {	
	Recipe.findByPk(req.params.recipeId, {
		include: ["users", "ingredients"/*, "materiels", "steps", "favorite"*/]
	}).then(recipe => {
		res.send(recipe);
	})
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.recipeId;
	Recipe.update( { 
		title: req.body.title, 
		time: req.body.time, 
		difficulty: req.body.difficulty, 
		category: req.body.category, 
		season: req.body.season, 
		image: req.body.image, 
		price: req.body.price }, 
		{ 
			where: {id: req.params.recipeId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a user with id = ' + id });
	});
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.recipeId;
	Recipe.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
	});
};


