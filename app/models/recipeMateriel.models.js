module.exports = (sequelize, Sequelize) => {
    const RecipeMateriel = sequelize.define("recipeMateriels", {
        recipeMateriel_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
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
    });

    return RecipeMateriel;
}