var express = require('express');
var router = express.Router();


const user = require("../models/authdataSchema");

// passport

const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(user.authenticate()));

// passport

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



  // -- after passport 

  // router.post("/loginuser" ,
  // passport.authenticate("local", {
  
  //    successRedirect :"/login", 
  //   failureRedirect :'/register', 
  // })
  // ,  (req,res,next)=> {

  //  if (req.isAuthenticated()) {
  //   // next();
  //   console.log("hogaya")
  //  } else {
  //   console.log("nih hoga")
  //  }

 
  //   });

  // -- after passport 



// --- login ---



// --- register ---



router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/regiteruser', async  function(req, res, next) {

  // after passport -----

  try {
    const {name , username , email , password } = req.body;
    await user.register({name , username , email} , password);
    res.redirect('/login');
   } catch (error) {
    res.send(error)
   }

// before passport---------
   
//  try {
//   const newUser = new user(req.body);
//   await newUser.save();
//   res.redirect('/login');
//  } catch (error) {
//   res.send(error)
//  }

});

// --- register ---



// --- about ---

router.get('/about', function(req, res, next) {
  res.render('about');
});

// --- about ---




module.exports = router;