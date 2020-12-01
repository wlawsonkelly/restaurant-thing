var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

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

var waitList = [
    {
        
    }
]

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
    return res.json(tables);
  });

app.post("/api/tables", function(req, res) {
  var newTable = req.body;
  console.log(newTable);

  if (tables.length < 5) {
    tables.push(newTable);
    //res.json(newTable);
  } else {
    waitList.push(newTable);
   //res.json(newTable);
  }

});

app.post("/api/tables", function(req, res) {
  tables = [];
  waitList = [];
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});