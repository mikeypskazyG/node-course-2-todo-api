// Date of authoring 2020-0525
// video 7-15
var mongoose = require('mongoose');

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
