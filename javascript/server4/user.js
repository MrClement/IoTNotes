var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  token: String,
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);
