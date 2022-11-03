module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {

        recipeId: {
            type: Sequelize.INTEGER,  
            primaryKey: true
          },

        title: {
            type: Sequelize.STRING,
        },
        time: {
            type: Sequelize.STRING,
        },
        difficulty: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },

        season: {
            type: Sequelize.STRING,
        },

        image: {
            type: Sequelize.STRING,
        },

        price: {
            type: Sequelize.INTEGER,
        }
    });
    return Recipe;
}