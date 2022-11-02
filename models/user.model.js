module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        firstName: {
            type : Sequelize.STRING
        },
        userName: {
            type : Sequelize.STRING
        },
        email: {
            type : Sequelize.STRING
        },
        login: {
            type : Sequelize.STRING
        },
        passworl: {
            type : Sequelize.STRING
        },
        image: {
            type : Sequelize.STRING
        }
    });
    return User;
}