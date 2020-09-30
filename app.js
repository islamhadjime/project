




const express  = require("express");
const hbs 	   = require("hbs")
const app      = express();
const mongoose = require("mongoose");
const parser   = require("body-parser")

// Conf
app.set("view engine", "hbs");
app.use(express.static(__dirname +"/public"));
app.use(parser.urlencoded({extended:false}));
hbs.registerPartials(__dirname + "/views/partials");

app.use("/",require("./router/homeRoutes"))



mongoose.connect("mongodb://localhost:27017/postdb", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(5000, function(){
        console.log("Сервер ожидает подключения...");
    });
});
