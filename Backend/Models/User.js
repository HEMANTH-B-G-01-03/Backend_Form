const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    email: String,
    profilePicture: String
});

module.exports = mongoose.model('User', userSchema);
