module.exports = (sequelize, Sequelize) => {
    const RecetteIngredient = sequelize.define("recetteIngredient", {
        Etape: {
            mesure: Sequelize.STRING,
        },
        Desciption: {
            quantite: Sequelize.INTEGER,
        }
        
    });
    return RecetteIngredient;
}