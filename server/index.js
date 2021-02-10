// const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const controllers = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client', 'dist')));
app.use(compression());
app.use(cors());
app.use(express.json());

app.get('/api/homes/similar/:id', controllers.getSimilarHomes);

app.listen(3000, () => { console.log('Listening on Port 3000'); });
