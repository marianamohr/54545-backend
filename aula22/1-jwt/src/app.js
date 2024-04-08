const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const pathView = path.join(`${__dirname}/views`);
const cookieParser = require("cookie-parser");
const session = require("express-session");
const viewsRoute = require("./routes/views.router");


const loginRoute = require("./routes/login.route");
const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("batatinha123"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.use(
  session({
    secret: "batatinha123",
  })
);

mongoose.connect('mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.catch((err) => {
    console.log(err);
    process.exit(1);
});
app.use("/api", loginRoute);
app.use("/", viewsRoute);


module.exports = app;
