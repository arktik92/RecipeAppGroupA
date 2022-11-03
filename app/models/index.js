const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST, 
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.recipes = require('./recipe.models.js')(sequelize, Sequelize);
db.users = require('./recipe.models.js')(sequelize, Sequelize);
db.materiels = require('./materiel.models.js')(sequelize, Sequelize);
db.ingredients = require('./ingredient.models.js')(sequelize, Sequelize);
db.etapes = require('./etapes.models.js')(sequelize, Sequelize);
db.recettes_ingredients = require('./recettes_ingredients.models.js')(sequelize, Sequelize);
db.favorites = require('./favorite.models.js')(sequelize, Sequelize);
db.recipe_materiels = require('./recipe_materiel.models.js')(sequelize, Sequelize);



// Favorite : jonction many to many (recipe, user) 

// favorite.associate = (models) => {
//   favorite.belongsTo(models.recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
//   favorite.belongsTo(models.user, { foreignKey: 'userId', targetKey: 'userId', as: 'user' });
// }
// user.associate = (models) => {
//   user.belongsToMany(models.recipe, { as: 'RecipesInUser', through: models.favorite, foreignKey: 'userId'});
// }

// recipe.associate = (models) => {
//   recipe.belongsToMany(models.user, { as: 'UsersForRecipe', through: models.favorite, foreignKey: 'recipeId'});
// }
// RecipeMateriel: jonction many to many (recipe, materiel) 
  // recipe_materiel.associate = (models) => {
  //   recipe_materiel.belongsTo(models.recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
  //   recipe_materiel.belongsTo(models.materiel, { foreignKey: 'materielId', targetKey: 'materielId', as: 'materiel' });
  // }
  // materiel.associate = (models) => {
  //   materiel.belongsToMany(models.recipe, { as: 'RecipesInMateriel', through: models.recipe_materiel, foreignKey: 'materielId'});
  // }
  
  // recipe.associate = (models) => {
  //   recipe.belongsToMany(models.materiel, { as: 'MaterielsForRecipe', through: models.recipe_materiel, foreignKey: 'recipeId'});
  // }


  // recetteIngredient : jonction many to many (recipe, ingredient) 
  // recette_ingredient.associate = (models) => {
  //   recette_ingredient.belongsTo(models.recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
  //   recette_ingredient.belongsTo(models.ingredient, { foreignKey: 'ingredientId', targetKey: 'ingredientId', as: 'ingredient' });
  // }
  // ingredient.associate = (models) => {
  //   ingredient.belongsToMany(models.recipe, { as: 'RecipesInIngredient', through: models.recette_ingredient, foreignKey: 'ingredientId'});
  // }
  
  // recipe.associate = (models) => {
  //   recipe.belongsToMany(models.ingredient, { as: 'IngredientsForRecipe', through: models.recette_ingredient, foreignKey: 'recipeId'});
  // }

// jonction one to many (user, recipe)
db.users.hasMany(db.recipes, { as: "recipes" });
db.recipes.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});

// jonction one to many (recipe, etape)

db.recipes.hasMany(db.etapes, { as: "etapes" });
db.etapes.belongsTo(db.recipes, {
    foreignKey: "recipeId",
    as: "recipe"
});




module.exports = db;
