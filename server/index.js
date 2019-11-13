const app = require('express')();
const db = require("./db");
const bodyParser = require('body-parser')
const fs = require('fs');

app.use(bodyParser.json())

app.use((req, res, next) => {
  req.db = db;
  req.db.write = function () {
    if (process.env.MODE !== "test") {
      fs.writeFile("server/db/db.json", JSON.stringify(req.db), function (err, data) {
        if (err) {
          console.log(err);
        }
      });
    }
  }
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
app.use('/users', require('./users'));


app.listen(process.env.MODE === "test" ? 4000 : 3001,
  () => console.log('Express server is running on localhost:3001'));

module.exports = app;
