var express = require('express');
var router = express.Router();

const user = require("../models/authdataSchema");



// --- home ---

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// --- home ---



// --- login ---

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post("/loginuser" , async (req,res)=> {
  res.render('profile');
});

// --- login ---



// --- register ---

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/regiteruser', async  function(req, res, next) {
 try {
  const newUser = new user(req.body);
  await newUser.save();
  res.redirect('/login');
 } catch (error) {
  res.send(error)
 }
});

// --- register ---



// --- about ---

router.get('/about', function(req, res, next) {
  res.render('about');
});

// --- about ---




module.exports = router;