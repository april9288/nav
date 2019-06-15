const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nordstrom_server', {useNewUrlParser: true})
  .then(() => console.log('MongoDB is up and running on 27017'))
  .catch(err => console.log(err));


