module.exports = (sequelize, Sequelize) => {
    const Etape = sequelize.define("etapes", {
        Etape: {
            type: Sequelize.STRING,
        },
        Desciption: {
            type: Sequelize.STRING,
        }
        
    });
    return Etape;
}