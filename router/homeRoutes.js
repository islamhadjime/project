


const express  = require('express');
const contHome = require("../controllers/contHome");
const routes    = express.Router();






routes.use("/result",contHome.result)
routes.use("/arr",contHome.arr)
routes.use("/doc",contHome.doc)
routes.use("/",contHome.home)

module.exports = routes;
