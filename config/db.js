/** File to connect to MongoDB */

const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.yyqgirk.mongodb.net/mern-project')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));
