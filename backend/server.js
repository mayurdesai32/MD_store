const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const database = require('./db/db');
const product = require('./routes/productRoute');
const ExpressError = require('./middleware/ExpressError');
const app = express();
// connect to Database
database();

app.use(express.json());

// all routes
app.use('/product', product);

const port = process.env.PORT;

// handling error
app.use(ExpressError);

// connection to server
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
