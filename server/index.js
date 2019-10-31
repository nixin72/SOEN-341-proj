const app = require('express')();
const db = require("./db");
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === "OPTION") {
    return res.sendStatus(200);
  }

  next();
});

app.use('/messages', require('./messages'));
app.use('/channels', require('./channels'));

app.listen(process.env.MODE === "test" ? 4000 : 3001,
  () => console.log('Express server is running on localhost:3001'));

module.exports = app;
