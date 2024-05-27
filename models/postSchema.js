const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    titel : {
        type :  String,
        trim : true , 
        required : [true , " title is required"],
        minLength: [4, "Title must be atleast 4 characters long"],
    } ,
    post : {
        type : String , 
        required: [true, "Media is required"],
    } , 
    user : {type  : mongoose.Schema.type.ObjectID , 
        ref: "user"
    }},
    { timestamps: true 
})


const Post = mongoose.model("post", postSchema);

module.exports = Post;