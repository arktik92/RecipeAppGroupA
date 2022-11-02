const db = require('../config/db.config.js')
const env = require('../config/env.js');
const Recipe = db.recipe;
const Op = db.Sequelize.Op;

// Créer et sauvegarder une recette
exports.create = (req,res) => {
if (!req.body.firstName) {
    res.status(400).send({
        message: "La recette ne peut pas être vide !"
    });
    return;
}
// Creer un recette 
const recipe = {
    title: req.body.title,
    time: req.body.time,
    difficulty: req.body.difficulty,
    category: req.body.category,
    season: req.body.season,
    image: req.body.image,
    price: req.body.price
}

// Sauvegader message dans la Database
Recipe.create(recipe)
.then(data => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Une erreur est apparu lors de la creation de la recette."
    })
})
};

// Retrouver les messages depuis la database
exports.findAll = (req,res) => {
    Recipe.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Une erreur est apparu lors de la recuperation des recettes."
        })
    })
};

// Retrouver message depuis Id 
exports.findOne = (req,res) => {
const id = req.params.id;
Recipe.findByPk(id)
.then(data => {
    if (data) {
        res.send(data)
    } else {
        res.status(404).send({
            message: `Impossible de retrouver la recette avec l'id=${id}.`
        })
    }
})
.catch(err => {
    res.status(500).send({
        message: "Impossible de rertrouver la recette avec l'id=" + id
    })
})
};

// Update message depuis Id
exports.update = (req,res) => {
    const id = req.params.id;
    Recipe.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Mise à jour de la recette réussie."
            })
        } else {
            res.send({
                message: `Impossible de mettre à jour la recette avec l'id=${id}.`
            })
        } 
    })
    .catch(err => {
        res.status(500).send({
            message: "Erreur pendant la mise à jour de la recette avec l'id=" + id
        })
    })
};

// Effacer un message avec Id
exports.delete = (req,res) => {
    const id = req.params.id 
    Recipe.destroy({
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Le message a bien été éffacé !"
              });
        } else {
            res.send({
                message: `Impossible d'effacer el message avec l'id=${id}.`
              });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
};

