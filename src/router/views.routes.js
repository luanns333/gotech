const express = require("express");
const viewsRouter = express.Router();
var path = require('path');

viewsRouter.get("/abertura-de-conta", function (_,res) {
    res.sendFile(path.resolve("./public/views/abertura-de-conta.html"))
})

viewsRouter.get("/", function (_,res) {
    res.sendFile(path.resolve("./public/views/home.html"))
})

viewsRouter.get("/login", function (_,res) {
    res.sendFile(path.resolve("./public/views/login.html"))
})


module.exports = {
    viewsRouter
};
