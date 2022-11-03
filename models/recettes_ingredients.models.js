module.exports = (sequelize, Sequelize) => {
    const RecetteIngredient = sequelize.define("recetteIngredient", {

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
              key: 'mesurId'
            }
          },

        quantite: {
            type: Sequelize.INTEGER,
        },

        quantiteId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
              model: 'quantitess',
              key: 'quaniteId'
            }
          },
        
    });
    return RecetteIngredient;
}

