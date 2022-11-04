module.exports = (app) => {
    const recipeMateriels = require('../controllers/recipeMateriel.controllers.js');

    //Create a new recipeMateriels
    app.post('/recipeMateriels', recipeMateriels.create);

    //Retrieve all recipeMateriels
    app.get('/recipeMateriels', recipeMateriels.findAll);

    //Retrieve a single recipeMateriels by Pk
    app.get('/recipeMateriels/:recipeMaterielId', recipeMateriels.findByPk);
     
    //Update a recipeMateriels with Id
    app.put('/recipeMateriels/:recipeMaterielId', recipeMateriels.update);

    //Delete a recipeMateriels with Id
    app.delete('/recipeMateriels/:recipeMaterielId', recipeMateriels.delete);
}