var db = require("../models");
var passport = require("passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var user;

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    user = req.user;
    res.render("index",user);
  });
  app.get("/create",isAuthenticated, function (req, res) {
    user = req.user;
    var value = '"'+req.user.id+'"';
    res.render("createEvent",user);
  });
  app.get("/event", function (req,res){
    user = req.user;
    console.log(user)
    res.render("event", user);
  });
  app.get("/login", function(req,res){
    res.render("login");
  });
  app.get("/user", function(req,res){
    user = req.user;
    res.render("user",user);
  });
  app.get("/register", function(req,res){
    res.render("register");
  })
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
