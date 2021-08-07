const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const testApiRoutes = require("./routes/testApi");
const tikiRoutes = require("./routes/tikiRoutes");
const session = require("express-session");
const sql = require("mssql");
var cors = require("cors");

//Initializing connection string
const dbConfig = {
  user: "sa",
  password: "123",
  server: "localhost\\TRANUY2",
  database: "CUAHANG",
  trustServerCertificate: true,
  

  //nha ban
  // user: "nhanvien",
  // password: "nv",
  // server: "localhost\\SQLDU",
  // database: "Tiki",
  // trustServerCertificate: true,
};

function connectToMSSQL() {
  var dbConn = new sql.ConnectionPool(dbConfig);
  //js promise
  dbConn
    .connect()
    .then(() => {
      console.log("connected to mssql!");
    })
    .catch(function (err) {
      console.log(err);
    });
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(
  session({
    secret: "mySecretKey",
    resave: true,
    saveUninitialized: false,
  })
);

// app.use(express.static("../frontend"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/api", tikiRoutes.routes);

connectToMSSQL();
module.exports = app;
