const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0/authdb').then(()=>console.log("Connected!")).catch(()=>{
    console.log("not connected")
});

