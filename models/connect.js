const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/social1").then(()=>console.log("Connected!")).catch(()=>{
    console.log("not connected")
});

