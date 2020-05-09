//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return Console.log('unable to connect to mongoDB server.');
  } //else {} ;
  console.log('connected to mongodb server');

  //deleteMany
  // db.collection('ToDos').deleteMany({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteONe
  // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // }); //> that doesnt work.
  // db.collection('ToDos').deleteOne({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneandDelete
  // db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //challege look for entries with multiple names and deleteMany, also findOneAndDelete
  // In users collection:
  //   look for any duplicates, deltemany with Andrew.
  // db.collection('Users').deleteMany({name: 'mike'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5ea785ee5910fa3e18e6c742")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });
  //C:\Users\MikePfindOneAndDelete by ID. instructor name of 'mike'
  // delte by oneID >> use video 7.9
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
