/*User model schema*/

//initializing and calling modules
const mongoose = require("mongoose");

//UserSchema with name, email and password as string and required inputs
const UserSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true, "Name is required."],
},
email: {
    type: String,
    required: [true, "A valid email is required."],
},
password: {
    type: String,
    required: [true, "Password required."],

    //isAdmin: default false
    //isBlock: default false
},
});

//creating and exporting model
const User = new mongoose.model("User", UserSchema);
module.exports = User;