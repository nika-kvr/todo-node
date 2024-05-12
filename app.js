const express = require('express');
const bodyParser = require('body-parser'); 
const path = require("path");

const app = express();

const errorController = require('./controllers/errorController');


// ejs
app.set("view engine", "ejs");
app.set("views", "views");


// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// use public folder for css
app.use(express.static(path.join(__dirname, "public")));

// import routes
const routes = require('./routes/routers');

app.use(routes);

app.use(errorController.getError);

// database connections
const sequelize = require('./util/database');
const Note = require('./models/noteModel');

sequelize
  // .sync({force: true})
  .sync()
  .then((result) => {
    // console.log(result)
    app.listen(3000);
  })
  .catch(err => {
      console.log(err)
  });

