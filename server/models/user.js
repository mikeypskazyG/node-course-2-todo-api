// Date of authoring 2020-0525
// video 7-15
var mongoose = require('mongoose');

var User = mongoose.model('User', {
  username:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});
module.exports = {User};
