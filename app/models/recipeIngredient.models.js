
module.exports = (sequelize, Sequelize) => {
    const RecipeIngredient = sequelize.define("recipeIngredients", {
        quantity: {
            type: Sequelize.STRING,
            allowNull: true
        },
        unity: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
//
    return RecipeIngredient;
}