
module.exports = (sequelize, Sequelize) => {
	const Ingredient = sequelize.define('ingredients', {
        name: {
            type: Sequelize.STRING,
        }
	});
	return Ingredient;
}