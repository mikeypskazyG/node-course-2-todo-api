// Date of authoring 2020-0509 edited 5-25-20

//library imports
var express = require('express');
var bodyParser = require('body-parser');
//local imports
var {mongoose} = require('./db/mongoose'); // can leave off .js extension
var {Todo} = require('./models/todo');
var {User}= require('./models/user');
//  green at left = hasnt been added to git
//  orange at left = been modified even though git is tracking it.
var app = express();
app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  console.log(req.body)
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('started on port 3000');
});

/* for video 7-12
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
*/

// newTodo.save().then((doc) => {
//     console.log('saved Todo.', doc);
//   }, (e) => {
//     console.log('unable to add toDo note');
// });
/*
//>>this was for video 7-13
var otherTodo = new Todo({
    text: '   edit this video 48  '
});

*/
// Modify this to see if this gets rid of my error, while having db running.
/*
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err)
     console.error(err);
  else
     console.log("Connected to the mongodb");
});
*/
//FOR THE CHALLENGE:
/*
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
var newUser = new User({
  username: 'skazy52',
  email: 'michael.przekaza.ii@gmail.com   '
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined,2 ));
}, (e) => {
  console.log('unable to save',e );
});
*/
//*****************
// Date of last running 2020-0524, see WORD file in NodeJS Videos Section7 folder
//
//challenge completed!!!!!
// NEXT gt this running:  C:\Users\MikeP\Documents\NodeJS videos\31-47 encoding originals >> app.js
//>>> why depricated??
