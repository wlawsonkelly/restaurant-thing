var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
  {
    name: "Yoda",
    email: "yoda@gmial.com",
    phone: 900,
    id: 2000
  },
  {
    name: "obi",
    email: "obi@gmail.com",
    phone: 900,
    id: 2000
  },
  {
    name: "darth",
    email: "darth@gmail.com",
    phone: 1800,
    id: 2000
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(tables.filter(function(table, index){
        return index > 4;
    }));
  });

app.post("/api/tables", function(req, res) {
  var newTable = req.body;
  console.log(newTable);
    tables.push(newTable);
    res.json(true)
});

app.get("/api/clear", function(req, res) {
  tables = [];
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});