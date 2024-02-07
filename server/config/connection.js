const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://codylthomp:xxtrU4usqx5XqPtC@gameshub.m9dymoh.mongodb.net/Gameshub';

mongoose.connect(MONGODB_URI, {
 
 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas - Gameshub');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

  

module.exports = mongoose.connection;