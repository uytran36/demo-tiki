var express = require("express");
var sql = require("mssql");

var router = express.Router();
/*
const dbConfig = {
  user: "sa",
  password: "123",
  server: "localhost\\TRANUY2",
  database: "Tiki",
  trustServerCertificate: true,
};
*/
const dbConfig = {
  user: "nhanvien",
  password: "nv",
  server: "localhost\\SQLDU",
  database: "Tiki",
  trustServerCertificate: true,
};

// router.get("/", function (req, res, next) {
//   var dbConn = new sql.ConnectionPool(dbConfig);
//   var request = new sql.Request(dbConn);

//   request
//     .query("select * from CT_HoaDon")
//     .then(function (resp) {
//       res.send(resp);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });

router.get("/", (req, res, next) => {
  sql
    .connect(dbConfig)
    .then((pool) => {
      pool
        .request()
        .query("select * from CT_HoaDon")
        .then((result) => {
          res.send(result.recordset);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});



module.exports = router;
