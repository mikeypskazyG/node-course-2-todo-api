// Date of edit 5-25-20
//  video 7-16, at point 11:30 trying to get tests to run

//library imports
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const Todo = require('./../models/todo');
//testing lifecycle test case
beforeEach((done) => { //runs before every test case
  Todo.remove({}).then(()=> done());
}); // makes sure db is empty first

describe('POST /todos/', () => {
  it('should create a new todo', (done) =>{
    var text = 'Test todo text';

    request(app)
    .post('/todos/')
    .send({text})
    .expect(200)
    .expect((res)=> {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if (err){
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos(0).text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });
});
