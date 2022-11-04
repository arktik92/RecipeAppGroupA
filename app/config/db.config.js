const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.users = require('../models/user.models.js')(sequelize, Sequelize);
db.steps = require('../models/step.models.js')(sequelize, Sequelize);
db.ingredients = require('../models/ingredient.models.js')(sequelize, Sequelize);
db.materiels = require('../models/materiel.models.js')(sequelize, Sequelize);
db.recipes = require('../models/recipe.models.js')(sequelize, Sequelize);
db.recipeIngredients = require('../models/recipeIngredient.models.js')(sequelize, Sequelize);
db.recipeMateriels = require('../models/recipeMateriel.models.js')(sequelize, Sequelize);
db.favorites = require('../models/favorite.models.js')(sequelize, Sequelize);
/*
db.recettes_ingredients = require('../models/recettes_ingredients.models.js')(sequelize, Sequelize);
db.favorites = require('../models/favorite.models.js')(sequelize, Sequelize);
db.recettes_materiels = require('../models/recipe_materiel.models.js')(sequelize, Sequelize);
*/


// relations 1:N

// User -> Recipe
db.users.hasMany(db.recipes, { as: "recipes" });
db.recipes.belongsTo(db.users, {
  foreignKey: "userId",
  as: "users"
});

// Step -> Recipe
db.recipes.hasMany(db.steps, { as: "steps" });
db.steps.belongsTo(db.recipes, {
    foreignKey: "recipeId",
    as: "recipes"
});

// Relations N:N

// Ingredient -> RecipeIngredient <- Recipe
db.ingredients.belongsToMany(db.recipes, { through: "recipeIngredients" });
db.recipes.belongsToMany(db.ingredients, { through: "recipeIngredients" });

db.ingredients.hasMany(db.recipeIngredients);
db.recipeIngredients.belongsTo(db.ingredients);

db.recipes.hasMany(db.recipeIngredients);
db.recipeIngredients.belongsTo(db.recipes);

// Materiel -> RecipeMateriel <- Recipe
db.materiels.belongsToMany(db.recipes, { through: "recipeMateriels" });
db.recipes.belongsToMany(db.materiels, { through: "recipeMateriels" });

db.materiels.hasMany(db.recipeMateriels);
db.recipeMateriels.belongsTo(db.materiels);

db.recipes.hasMany(db.recipeMateriels);
db.recipeMateriels.belongsTo(db.recipes);


//User -> Favorite <- Recipe
db.users.belongsToMany(db.recipes, { through: "favorites" });
db.recipes.belongsToMany(db.users, { through: "favorites" });

db.users.hasMany(db.favorites);
db.favorites.belongsTo(db.users);

db.recipes.hasMany(db.favorites);
db.favorites.belongsTo(db.recipes);


/*
db.users.hasMany(db.recipes, { as: "recipes" });
db.recipes.belongsTo(db.users, {
    foreignKey: "userId",
    as: "users"
});

*/







/**
// 1:N 
db.users.hasMany(db.recipes, { as: "recipes" });
db.recipes.belongsTo(db.users, { 
  foreignKey: "userId",
  as: "users"
});

db.recipes.hasMany(db.steps, { as: "steps"});
db.steps.belongsTo(db.recipes, { 
  foreignKey: "recipeId",
  as: "recipes"
});



// FIN USER RECIPE

// ingredient recette N:N
db.ingredients.belongsToMany(db.recipes, {
  through: "recettes_ingredients"
});

db.recipes.belongsToMany(db.ingredients, {
  through: "recettes_ingredients"
});

db.ingredients.hasMany(db.recettes_ingredients)
db.recettes_ingredients.belongsTo(db.ingredients)

db.recipes.hasMany(db.recettes_ingredients)
db.recettes_ingredients.belongsTo(db.recipes)

//

// N:N
db.materiels.belongsToMany(db.recipes, {
  through: "recette_materiel"
});

db.recipes.belongsToMany(db.materiels, {
  through: "recette_materiel"
});

db.materiels.hasMany(db.recettes_materiels)
db.recettes_materiels.belongsTo(db.materiels)
db.recipes.hasMany(db.recettes_materiels)
db.recettes_materiels.belongsTo(db.recipes)

//

// N:N
db.users.belongsToMany(db.recipes, {
  through: "favorite"
});

db.recipes.belongsToMany(db.users, {
  through: "favorites"
});

db.users.hasMany(db.favorites)
db.favorites.belongsTo(db.users)

db.recipes.hasMany(db.favorites)
db.favorites.belongsTo(db.recipes)

//


*/



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Favorite : jonction many to many (recipe, user) 

// db.favorite.associate = (models) => {
//   favorite.belongsTo(models.recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
//   favorite.belongsTo(models.user, { foreignKey: 'userId', targetKey: 'userId', as: 'user' });
// }
// db.user.associate = (models) => {
//   user.belongsToMany(models.recipe, { as: 'RecipesInUser', through: models.favorite, foreignKey: 'userId'});
// }

// recipe.associate = (models) => {
//   recipe.belongsToMany(models.user, { as: 'UsersForRecipe', through: models.favorite, foreignKey: 'recipeId'});
// }
// // RecipeMateriel: jonction many to many (recipe, materiel) 
//   recipe_materiel.associate = (models) => {
//     recipe_materiel.belongsTo(models.recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
//     recipe_materiel.belongsTo(models.materiel, { foreignKey: 'materielId', targetKey: 'materielId', as: 'materiel' });
//   }
//   db.materiel.associate = (models) => {
//     materiel.belongsToMany(models.recipe, { as: 'RecipesInMateriel', through: models.recipe_materiel, foreignKey: 'materielId'});
//   }
  
//   recipe.associate = (models) => {
//     recipe.belongsToMany(models.materiel, { as: 'MaterielsForRecipe', through: models.recipe_materiel, foreignKey: 'recipeId'});
//   }


//   // recetteIngredient : jonction many to many (recipe, ingredient) 
//   db.recette_ingredient.associate = (models) => {
//     recette_ingredient.belongsTo(models.recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
//     recette_ingredient.belongsTo(models.ingredient, { foreignKey: 'ingredientId', targetKey: 'ingredientId', as: 'ingredient' });
//   }
//   db.ingredient.associate = (models) => {
//     ingredient.belongsToMany(models.recipe, { as: 'RecipesInIngredient', through: models.recette_ingredient, foreignKey: 'ingredientId'});
//   }
  
//   db.recipe.associate = (models) => {
//     recipe.belongsToMany(models.ingredient, { as: 'IngredientsForRecipe', through: models.recette_ingredient, foreignKey: 'recipeId'});
//   }

// // jonction one to many (user, recipe)
// db.users.hasMany(db.recipes, { as: "recipe" });
// db.recipes.belongsTo(db.users, {
//     foreignKey: "userId",
//     as: "user"
// });

// // jonction one to many (recipe, etape)

// db.recipes.hasMany(db.etapes, { as: "etapes" });
// db.etapes.belongsTo(db.recipes, {
//     foreignKey: "recipeId",
//     as: "recipe"
// });

module.exports = db;
