const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const tikiRoutes = require("./routes/tikiRoutes");
const session = require("express-session");
const sql = require("mssql");
var cors = require("cors");
const timeout = require("connect-timeout");
//Initializing connection string
const dbConfig = {
  user: "sa",
  password: "123",
  server: "localhost\\TRANUY2",
  database: "Tiki",
  trustServerCertificate: true,
  

  //nha ban
  // user: "nhanvien",
  // password: "nv",
  // server: "localhost\\SQLDU",
  // database: "Tiki",
  // trustServerCertificate: true,
  user: "sa",
  password: "0512DeviL1212",
  server: "localhost\\SQLEXPRESS",
  database: "Tiki",
  trustServerCertificate: true,
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


app.use(timeout("30s"));

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
