module.exports = (sequelize, Sequelize) => {
	const Step = sequelize.define('steps', {
        etape: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        }
	});
	return Step;
}