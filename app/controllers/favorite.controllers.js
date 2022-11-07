const db = require('../config/db.config.js');
const env = require('../config/env.js');

const Favorite = db.favorites;

//Post Favorite
exports.create = (request, response) => {
    //Save to MySQL database
    Favorite.create({
        userId: request.body.userId,
        recipeId: request.body.recipeId
    }).then(favorite => {
        response.send(favorite);
    });
};

//FETCH all Favorite
exports.findAll = (request, response) => {
    Favorite.findAll().then(favorite => {
        response.send(favorite);
    });
};

//Find Favorite by Id
exports.findByPk = (request, response) => {
    Favorite.findByPk(request.params.favoriteId).then(favorite => {
        response.send(favorite);
    });
};

exports.update = (request, response) => {
    const id = request.params.favoriteId;
    Favorite.update({
        userId: request.body.userId,
        recipeId: request.body.recipeId
    }, {
        where: {
            favoriteId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully a favorite with id = ' + id
        });
    });
};

//Deleted Favorite by Id
exports.delete = (request, response) => {
    const id = request.params.favoriteId;
    Favorite.destroy({
        where: { favoriteId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully a favorite with id = ' + id
        });
    });
};