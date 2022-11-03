module.exports = (sequelize, Sequelize) => {
    const RecetteIngredient = sequelize.define("recetteIngredients", {
        mesure: {
            type: Sequelize.STRING,     
        },
        quantite: {
            type: Sequelize.INTEGER,
        }
    });
    return RecetteIngredient;
}

