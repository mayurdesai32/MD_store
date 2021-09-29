const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const database = require('./db/db');
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const ExpressError = require('./middleware/ExpressError');
const cookieParser = require('cookie-parser');
const app = express();
// connect to Database
database();

app.use(express.json());
app.use(cookieParser());

// all routes
app.use('/product', product);
app.use('/user', user);

const port = process.env.PORT;

// handling error
app.use(ExpressError);

// connection to server
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
