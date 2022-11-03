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


// Favorite : jonction many to many (recipe, user) 

Favorite.associate = (models) => {
    Favorite.belongsTo(models.Recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
    Favorite.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'userId', as: 'user' });
  }
  User.associate = (models) => {
    User.belongsToMany(models.Recipe, { as: 'RecipesInUser', through: models.Favorite, foreignKey: 'userId'});
  }
  
  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.User, { as: 'UsersForRecipe', through: models.Favorite, foreignKey: 'recipeId'});
  }

  
  // RecipeMateriel: jonction many to many (recipe, materiel) 
RecipeMateriel.associate = (models) => {
    RecipeMateriel.belongsTo(models.Recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
    RecipeMateriel.belongsTo(models.Materiel, { foreignKey: 'materielId', targetKey: 'materielId', as: 'materiel' });
  }
  Materiel.associate = (models) => {
    Materiel.belongsToMany(models.Recipe, { as: 'RecipesInMateriel', through: models.RecipeMateriel, foreignKey: 'materielId'});
  }
  
  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Materiel, { as: 'MaterielsForRecipe', through: models.RecipeMateriel, foreignKey: 'recipeId'});
  }


  // recetteIngredient : jonction many to many (recipe, ingredient) 
  recetteIngredient.associate = (models) => {
    recetteIngredient.belongsTo(models.Recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
    recetteIngredient.belongsTo(models.Ingredient, { foreignKey: 'ingredientId', targetKey: 'ingredientId', as: 'ingredient' });
  }
  Ingredient.associate = (models) => {
    Ingredient.belongsToMany(models.Recipe, { as: 'RecipesInIngredient', through: models.RecetteIngredient, foreignKey: 'ingredientId'});
  }
  
  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Ingredient, { as: 'IngredientsForRecipe', through: models.RecetteIngredient, foreignKey: 'recipeId'});
  }

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
