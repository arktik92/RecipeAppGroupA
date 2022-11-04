module.exports = (app) => {
    const recipeIngredients = require('../controllers/recipeIngredient.controllers.js');

    //Create a new recipeIngredient
    app.post('/recipeIngredients/index', recipeIngredients.create);

    //Retrieve all recipeIngredients
    app.get('/recipeIngredients/index', recipeIngredients.findAll);

    //Retrieve a single Recipe Ingredient by Pk
    app.get('/recipeIngredients/:recipeIngredientId', recipeIngredients.findByPk);

    //Update a recipeIngredient with Id
    app.put('/recipeIngredients/:recipeIngredientId', recipeIngredients.update);

    //Delete a recipeIngredient with Id
    app.delete('/recipeIngredients/:recipeIngredientId', recipeIngredients.delete);
}