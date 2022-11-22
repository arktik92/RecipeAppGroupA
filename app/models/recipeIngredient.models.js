
module.exports = (sequelize, Sequelize) => {
    const RecipeIngredient = sequelize.define("recipeIngredients", {
        quantity: {
            type: Sequelize.STRING,
            allowNull: false
        },
        unity: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return RecipeIngredient;
}