var express = require('express');
var router = express.Router();


const user = require("../models/authdataSchema");

// --- passport ---

const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(user.authenticate()));

// ---  passport ---


// --- home ---

router.get('/', function(req, res, next) {
  res.render('index', {user : req.user});
});

// --- home ---



// --- login ---

router.get('/login', function(req, res, next) {
  res.render('login' ,{user : req.user});
});

// router.post("/loginuser" , async (req,res)=> {

//   res.render('profile');
// });



  // -- after passport 

  router.post("/loginuser" ,
  passport.authenticate("local", {
  
     successRedirect :"/profile", 
    failureRedirect :'/login', 
  })
  ,  (req,res,next)=> {


 
    });  

 // --- middilway ---


function isLoggedin(req,res,next){
  if (req.isAuthenticated()) {
    next();
    console.log("hogaya")
   } else {
    console.log("nih hoga")
    res.redirect("/login")
   }

}

 // --- middilway ---



// -- after passport 



// --- login ---



// --- register ---



router.get('/register', function(req, res, next) {
  res.render('register' ,{user : req.user});
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
  res.render('about',{user : req.user});
});

// --- about ---


//  --- logout ---

router.get("/logout" ,function(req,res,next) {
req.logOut(()=>{
  res.redirect("/login")
})
})

//  --- logout ---



// --- profile ----

router.get('/profile',isLoggedin , function(req, res, next) {
  res.render('profile',{user : req.user});
});

// --- profile ---- 


// --- updata-user ---

router.get("/update-user/:_id" , function(req,res){
  
  res.render("updateuser",{user : req.user})
})

// --- updata-user ---


// --- reset password --- 

router.get("/reset-password" , async function(req,res){
//   try {
//     await req.user.changePassword(
//         req.body.oldpassword,
//         req.body.newpassword
//     );
//     await req.user.save();
//     res.redirect("/profile");
// } catch (error) {
//     res.send(error);
// }
  res.send("reset password")
})

// --- reset password --- 


// --- delete account --- 

router.get("/delete-account" , function(req,res){
  res.send("delete account");
});

// --- delete account --- 

// --- forget password ---

router.get("/forgat" , async function(req,res){
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (!user)
//         return res.send("User not found! <a href='/forget'>Try Again</a>.");

//     await user.setPassword(req.body.newpassword);
//     await user.save();
//     res.redirect("/signin");
// } catch (error) {
//     res.send(error);
// }
 res.send("enter new password");

});

// --- forget password ---


module.exports = router;