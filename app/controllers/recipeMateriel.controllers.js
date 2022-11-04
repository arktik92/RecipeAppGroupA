const db = require('../config/db.config.js');
const env = require('../config/env.js');

const RecipeMateriel = db.recipeMateriels;

//Post the amount of Recipe Utensil
exports.create = (request, response) => {
    //Save to MySQL database
    RecipeMateriel.create({
        recipeId: request.body.recipeId,
        materielId: request.body.materielId
    }).then(recipeMateriel => {
        response.send(recipeMateriel);
    });
};

//FETCH all amount of Recipe Utensil
exports.findAll = (request, response) => {
    RecipeMateriel.findAll({
        include: ["recipes", "materiels"]
    }).then(recipeMateriels => {
        response.send(recipeMateriels);
    });
};

//Find an amount of Recipe Utensil by Id
exports.findByPk = (request, response) => {
    RecipeMateriel.findByPk(request.params.recipeMaterielId, {
        include: ["recipe", "materiel"]
    }).then(recipeMateriel => {
        response.send(recipeMateriel);
    });
};

exports.update = (request, response) => {
    const id = request.params.recipeMaterielId;
    RecipeMateriel.update({
        amount: request.body.amount
    }, {
        where: {
            recipeMaterielId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully an amount of recipe utensil with id = ' + id
        });
    });
};

//Deleted an amount of Recipe Utensil by Id
exports.delete = (request, response) => {
    const id = request.params.recipeMaterielId;
    RecipeMateriel.destroy({
        where: { recipeMaterielId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully an amount of recipe utensil with id = ' + id
        });
    });
};