const express = require('express');
const models = require('./models');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

app.use(bodyParser.json());

app.post('/schema')