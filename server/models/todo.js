// Date of authoring 2020-0525
// video 7-15

var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {  ///what i need to set up
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});
module.exports = {Todo};
