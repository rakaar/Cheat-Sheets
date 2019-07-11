var mongo = require('mongodb');
const url = 'mongodb://localhost:27017';

mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log('database conected');
  //select a database
  var dbo = db.db('practiceDatabase');

  //create a collection
  var collection = dbo.collection('users');

  //dummy data
  var data = [{ name: 'kau', age: 19 }, { name: 'aau', age: 10 }];

  // insert data into the collection
  collection.insertMany(data, (err, res) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    console.log(res); // this result contains number of items, inserted data ids and ofcourse the data that can be accesed using res.ops
  });

  db.close();
});
