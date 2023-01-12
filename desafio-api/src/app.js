const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(routes);


module.exports = app;