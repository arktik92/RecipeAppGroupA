module.exports = (sequelize, Sequelize) => {
    const RecetteIngredient = sequelize.define("recetteIngredients", {

        RecetteIngredientId: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },

        mesure: {
            type: Sequelize.STRING,     
        },

        mesureId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
              model: 'mesures',
              key: 'mesureId'
            }
          },

        quantite: {
            type: Sequelize.INTEGER,
        },

        quantiteId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
              model: 'quantites',
              key: 'quantiteId'
            }
          },
        
    });
    return RecetteIngredient;
}

