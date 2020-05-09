//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return Console.log('unable to connect to mongoDB server.');
  } //else {} ;
  console.log('connected to mongodb server');
  // video 7.10 updating documents.
  // (filter, update, options, callback)
  // db.collection('ToDos').findOneAndUpdate({
  //   _id: new ObjectID('5eb0c312b752275958766c03')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  // CHALLENGE
  // UPDATE NAME TO YOUR NAME,
  // INCREMENT AGE BY ONE
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ea78651188bc9036c509aa8')
  },{
    $set:{
      name: "Mikey"
    },
      $inc:{
        age: 7
      }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
//db.close();
});
//date of authoring : 2020-0509

//   COLLECTIONS ARE CasEEEEE SENsitiVE

//using Atom IDE
//  https://mongodb.github.io/node-mongodb-native/3.6/api/
// location of todo data : C:\Users\MikeP\mongodb-data
// location to run the mongodb database : C:\Users\MikeP\mongodb\bin
//location of playground folder :
/*
{
    text: 'eat lunch',
    completed: false
}
*/
