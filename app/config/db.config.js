

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: "postgres",
//   operatorsAliases: "0",

// });
 


const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
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
// db.recipeIngredients = require('../models/recipeIngredient.models.js')(sequelize, Sequelize);
// db.recipeMateriels = require('../models/recipeMateriel.models.js')(sequelize, Sequelize);
// db.favorites = require('../models/favorite.models.js')(sequelize, Sequelize);

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
db.ingredients.belongsToMany(db.recipes, { 
  through: "recipeIngredients", 
  oreignKey: "ingredientId",
  otherKey: "recipeId"
});

db.recipes.belongsToMany(db.ingredients, { 
  through: "recipeIngredients",
  foreignKey: "recipeId",
  otherKey: "ingredientId" 
});


// db.ingredients.hasMany(db.recipeIngredients);
// db.recipeIngredients.belongsTo(db.ingredients);

// db.recipes.hasMany(db.recipeIngredients);
// db.recipeIngredients.belongsTo(db.recipes);

// Materiel -> RecipeMateriel <- Recipe
db.materiels.belongsToMany(db.recipes, { 
  through: "recipeMateriels",
  foreignKey: "materielId",
  otherKey: "recipeId"
});
db.recipes.belongsToMany(db.materiels, { 
  through: "recipeMateriels",
  foreignKey: "recipeId",
  otherKey: "materielId"
});

// db.materiels.hasMany(db.recipeMateriels);
// db.recipeMateriels.belongsTo(db.materiels);

// db.recipes.hasMany(db.recipeMateriels);
// db.recipeMateriels.belongsTo(db.recipes);


//User -> Favorite <- Recipe
db.users.belongsToMany(db.recipes, { 
  through: "favorites",
  foreignKey: "userId",
  otherKey: "recipeId"
 });
 db.recipes.belongsToMany(db.users, { 
  through: "favorites",
  foreignKey: "recipeId",
  otherKey: "userId"
 });

// db.users.hasMany(db.favorites);
// db.favorites.belongsTo(db.users);

// db.recipes.hasMany(db.favorites);
// db.favorites.belongsTo(db.recipes);




module.exports = db;
