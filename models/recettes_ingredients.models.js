module.exports = (sequelize, Sequelize) => {
    const RecetteIngredient = sequelize.define("recetteIngredient", {
        mesure: {
            type: Sequelize.STRING,
        },
        quantite: {
            type: Sequelize.INTEGER,
        }
        
    });
    return RecetteIngredient;
}

