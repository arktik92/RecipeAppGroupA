module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define('favorite', {
        favoriteId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: {
          model: 'users',
          key: 'userId'
        }
      },
      recipeId: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: {
          model: 'recipes',
          key: 'recipeId'
        }
    }
    });
  
    return Favorite;
  };