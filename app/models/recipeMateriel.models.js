module.exports = (sequelize, Sequelize) => {
    const RecipeMateriel = sequelize.define("recipeMateriels", {
        /*
        recipeId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'recipes',
                key: 'recipeId'
              },
        },
        materielId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'materiels',
                key: 'materielId'
              },
        }
        */
    });

    return RecipeMateriel;
}