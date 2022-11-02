const dbConfig = require('../config/config.db.js');
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

db.recipe = require('./recipe.models.js')(sequelize, Sequelize);
db.user = require('./recipe.models.js')(sequelize, Sequelize);
db.materiel = require('./materiel.models.js')(sequelize, Sequelize);
db.ingredient = require('./ingredient.models.js')(sequelize, Sequelize);
db.etapes = require('./etapes.models.js')(sequelize, Sequelize);
db.recettes_ingredients = require('./recettes_ingredients.models.js')(sequelize, Sequelize);

module.exports = db;