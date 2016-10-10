var mongoose = require('mongoose');
var passport = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(passport);

module.exports = mongoose.model('User', userSchema);
