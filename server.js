const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./models');

var corsOption = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.json({message: 'Welcome to the TEAM App'})
})


require("./routes/recipe.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/materiel.routes.js")(app);
require("./routes/ingredient.routes.js")(app);
require("./routes/etapes.routes.js")(app);
require("./routes/recettes_ingredients.routes.js")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
})

db.sequelize.sync() 