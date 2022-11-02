module.exports = (sequelize, Sequelize) => {
    const Materiel = sequelize.define("materiel", {
        name: {
            type: Sequelize.STRING,
        }
    });
    return Materiel;
}