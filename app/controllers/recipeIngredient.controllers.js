const db = require('../config/db.config.js');
const env = require('../config/env.js');

const RecipeIngredient = db.recipeIngredients;

//Post the amount of Recipe Ingredient
exports.create = (request, response) => {
    //Save to MySQL database
    RecipeIngredient.create({
        quantity: request.body.amount,
        unity: request.body.unity,
        recipeId: request.body.recipeId,
        ingredientId: request.body.ingredientId
    }).then(recipeIngredient => {
        response.send(recipeIngredient);
    });
};

//FETCH all amount of Recipe Ingredient
exports.findAll = (request, response) => {
    RecipeIngredient.findAll({
        include: ["recipe", "ingredient"]
    }).then(recipeIngredient => {
        response.send(recipeIngredient);
    });
};

//Find an amount of Recipe Ingredient by Id
exports.findByPk = (request, response) => {
    RecipeIngredient.findByPk(request.params.recipeIngredientId, {
        include: ["recipe", "ingredient"]
    }).then(recipeIngredient => {
        response.send(recipeIngredient);
    });
};

exports.update = (request, response) => {
    const id = request.params.recipeIngredientId;
    RecipeIngredient.update({
        amount: request.body.amount
    }, {
        where: {
            recipeIngredientId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully an amount of recipe ingredient with id = ' + id
        });
    });
};

//Deleted an amount of Recipe Ingredient by Id
exports.delete = (request, response) => {
    const id = request.params.recipeIngredientId;
    RecipeIngredient.destroy({
        where: { recipeIngredientId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully an amount of recipe ingredient with id = ' + id
        });
    });
};