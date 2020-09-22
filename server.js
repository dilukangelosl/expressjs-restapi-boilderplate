require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const cors = require('cors');
const errorhandler = require('errorhandler');

//connect to database
require('./utils/db-connection')();

const apiPrefix = "/api/vi";

if (process.env.NODE_ENV === 'development') {
    // only use in development
    console.log("Using error Handler")
    app.use(errorhandler())
  }

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//enable cors
app.use(cors());


app.use('/api/v1/example', require('./routes/example.route'));
app.use('/api/v1/auth', require('./routes/user.route'));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})