const express = require ('express');
const bodyParser = require ('body-parser');
require ('./db/mongoose');
const app = express ();
const gotRoutes = require ('./routes/gotRoutes');

app.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header (
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE'
  );
  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next ();
});
app.use (bodyParser.json ());
app.use (gotRoutes);

module.exports = app;
