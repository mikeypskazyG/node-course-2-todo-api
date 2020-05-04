//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return Console.log('unable to connect to mongoDB server.');
  } //else {} ;
  console.log('connected to mongodb server');

//   db.collection('ToDos').find({
//     _id: new ObjectID('5eab6b4504a0891f627a0856')
//    }).toArray().then((docs)=> {
//     console.log('ToDos');  //prints to dos to the screen
//     console.log(JSON.stringify(docs,undefined, 2 ));
//   }, (err)=>{ //adds error handler
//     console.log('unable to fetch todos', err);
//   });
//   //db.close();
// });

// db.collection('ToDos').find().count().then((count)=> {
//   console.log(`ToDos count: ${count}`);  //prints to dos to the screen
// }, (err)=>{ //adds error handler
//   console.log('unable to fetch todos', err);
// });
db.collection('Users').find( {name: "jen"}).toArray().then((docs)=> {
  console.log(JSON.stringify(docs, undefined, 2));  //prints to dos to the screen
}, (err)=>{ //adds error handler
  console.log('unable to fetch todos', err);
});

//db.close();
});
//date of authoring : 2020-0430

//   COLLECTIONS ARE CasEEEEE SENsitiVE

//using Atom IDE
//  https://mongodb.github.io/node-mongodb-native/3.6/api/
// location of todo data : C:\Users\MikeP\mongodb-data
// location to run the mongodb database : C:\Users\MikeP\mongodb\bin
//location of playground folder :
