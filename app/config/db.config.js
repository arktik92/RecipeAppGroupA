require('dotenv').config();

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;
const dbUrl = process.env.DATABASE_URL;


// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(username, database, password, {
//   host: host,
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
db.recipeIngredients = require('../models/recipeIngredient.models.js')(sequelize, Sequelize);
db.recipeMateriels = require('../models/recipeMateriel.models.js')(sequelize, Sequelize);
db.favorites = require('../models/favorite.models.js')(sequelize, Sequelize);

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
