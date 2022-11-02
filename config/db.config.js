module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'iiceman92',
    DB: 'RecipeAppGroupA',
    dialect: 'mysql', 
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
