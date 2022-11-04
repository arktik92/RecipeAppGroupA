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




module.exports = db;
