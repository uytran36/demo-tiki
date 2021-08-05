const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getKhachHang = async () => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    const khachHangList = await pool.request().query(sqlQueries.khachHangList);
    return khachHangList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const createKH = async (khachHangData) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    console.log(khachHangData);
    const insertKH = await pool
      .request()
      .input("MaKH", sql.Int, khachHangData.MaKH)
      .input("Ten", sql.NVarChar(50), khachHangData.Ten)
      .input("Sdt", sql.Char(10), khachHangData.Sdt)
      .input("SoNha", sql.Char(10), khachHangData.SoNha)
      .input("Duong", sql.NVarChar(50), khachHangData.Duong)
      .input("Phuong", sql.NVarChar(50), khachHangData.Phuong)
      .input("Quan", sql.NVarChar(50), khachHangData.Quan)
      .input("ThanhPho", sql.NVarChar(50), khachHangData.ThanhPho)
      .input("Email", sql.NVarChar(50), khachHangData.Email)
      .input("MatKhau", sql.VarChar(50), khachHangData.MatKhau)
      .input("GioiTinh", sql.NVarChar(3), khachHangData.GioiTinh)
      .input("NgaySinh", sql.Date, khachHangData.NgaySinh)
      .input("TikiXu", sql.Int, khachHangData.TikiXu)
      .query(sqlQueries.createKhachHang);
    return insertKH.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};
module.exports = {
  getKhachHang,
  createKH,
};
