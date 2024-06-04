// create web server
// use express module
const express = require('express');
const app = express();

// use body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use cors module
const cors = require('cors');
app.use(cors());

// use dotenv module
require('dotenv').config();

// use mysql module
const mysql = require('mysql')