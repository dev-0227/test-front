const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const login = require('./routes/login');
const cors = require('cors');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Config middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static Pages
app.use('/assets', express.static(path.join(__dirname, 'views/assets')));
app.use('/', login);

module.exports = app;
