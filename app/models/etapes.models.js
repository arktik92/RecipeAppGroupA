module.exports = (sequelize, Sequelize) => {
	const Etape = sequelize.define('etapes', {
        etape: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        }
	});
	return Etape;
}