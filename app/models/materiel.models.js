module.exports = (sequelize, Sequelize) => {
	const Materiel = sequelize.define('materiels', {
	  name: {
		type: Sequelize.STRING
	  }
	});
	return Materiel;
}

