const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {type: String, require: true, min:4, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true}
});

const userModel = model('User', userSchema)

module.exports = userModel;