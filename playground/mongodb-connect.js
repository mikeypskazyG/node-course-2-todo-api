const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return Console.log('unable to connect to mongoDB server.');
  } //else {} ;
  console.log('connected to mongodb server');
  // db.collection('ToDos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if (err){
  //     return console.log('unable to insert item.', err);
  //   }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').insertOne({
    _id: 123,
    name:'michael MP2',
    age: 31,
    location: 'Massachusetts'
  }, (err, result)=>{
       if (err) {
       return console.log('unable to insert person', err);
    }
    console.log(JSON.stringify (result.ops, undefined, 2));

  });
  db.close();
});

//date of authoring : 2020-0427

//using Atom IDE
// location of todo data : C:\Users\MikeP\mongodb-data
// location to run the mongodb database : C:\Users\MikeP\mongodb\bin
//location of playground folder :
