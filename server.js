const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser   = require('body-parser');
const app = express();
 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = require('./app/config/db.config.js');

app.get("/", (req, res) => {
// api routes
  res.json({ message: "Welcome to the TEAM's App." });
});
 
 require('./app/routes/user.routes.js')(app);
// require('./app/routes/step.routes.js')(app);
// require('./app/routes/ingredient.routes.js')(app);
// require('./app/routes/materiel.routes.js')(app);
require('./app/routes/recipe.routes.js')(app)
// require('./app/routes/recipeIngredient.routes.js')(app);
// require('./app/routes/recipeMateriel.routes.js')(app);
// require('./app/routes/favorite.routes.js')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}.`);
});

// db.sequelize.sync()

 db.sequelize.sync({force: true}).then(() => {
 console.log('Drop and Resync with { force: true }');
});
 
//