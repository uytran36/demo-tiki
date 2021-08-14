const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");


const createNVQLK = async (NVQTData) => {
    try {
      let pool = await sql.connect(config);
      const sqlQueries = await utils.loadSqlQueries("NVQT");
      const insertNV = await pool
        .request()
        .input("HoTen", sql.NVarChar(20), NVQTData.HoTen)
        .input("SDT", sql.Char(10), NVQTData.SDT)
        .input("SoNha", sql.Char(20), NVQTData.SoNha)
        .input("Duong", sql.NVarChar(50), NVQTData.Duong)
        .input("Phuong", sql.NVarChar(50), NVQTData.Phuong)
        .input("Quan", sql.NVarChar(50), NVQTData.Quan)
        .input("ThanhPho", sql.NVarChar(50), NVQTData.ThanhPho)
        .input("Email", sql.NVarChar(50), NVQTData.Email)
        .input("MatKhau", sql.VarChar(50), NVQTData.MatKhau)
        .input("GioiTinh", sql.NVarChar(3), NVQTData.GioiTinh)
        .input("NgaySinh", sql.Date, NVQTData.NgaySinh)
        .input("Luong", sql.BigInt, NVQTData.Luong)
        .input("NgayVaoLam", sql.Date, NVQTData.NgayVaoLam)
        .input("HeSoLuong", sql.Float, NVQTData.HeSoLuong)
        .execute('createNVQLK');
      return insertNV.recordset;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  const getKhachHang = async (page) => {
    try {
      let pool = await sql.connect(config);
      const sqlQueries = await utils.loadSqlQueries("NVQT");
      const getKH = await pool
      .request()
      .input("page", sql.Int, page)
      .query(sqlQueries.getKhachHang);

      return getKH.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLuongNVGH = async (page) => {
    try {
      let pool = await sql.connect(config);
      const sqlQueries = await utils.loadSqlQueries("NVQT");
      const getLuong = await pool
      .request()
      .input("page", sql.Int, page)
      //.input("ngay", sql.Date, ngay)
      .query(sqlQueries.getLuongNVGH);

      return getLuong.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAmountLSBD_NVGH = async () => {
    try {
      let pool = await sql.connect(config);
      const sqlQueries = await utils.loadSqlQueries("NVQT");
      const getAmount = await pool
      .request()
      .query(sqlQueries.getAmountLSBD_NVGH);

      return getAmount.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLuongNVQLK = async (page) => {
    try {
      let pool = await sql.connect(config);
      const sqlQueries = await utils.loadSqlQueries("NVQT");
      const getLuong = await pool
      .request()
      .input("page", sql.Int, page)
      //.input("ngay", sql.Date, ngay)
      .query(sqlQueries.getLuongNVQLK);

      return getLuong.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAmountLSBD_NVQLK = async () => {
    try {
      let pool = await sql.connect(config);
      const sqlQueries = await utils.loadSqlQueries("NVQT");
      const getAmount = await pool
      .request()
      .query(sqlQueries.getAmountLSBD_NVQLK);

      return getAmount.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getNVQLK = async () => {
    try {
      let pool = await sql.connect(config);
      const sqlQueries = await utils.loadSqlQueries("NVQT");
      const getNVQLK = await pool
      .request()
      .query(sqlQueries.getNVQLK);

      return getNVQLK.recordset;
    } catch (error) {
      console.log(error.message);
    }
  }


  module.exports = {
    getAmountLSBD_NVGH,   
    createNVQLK,
    getKhachHang,
    getLuongNVGH,
    getLuongNVQLK,
    getAmountLSBD_NVQLK,
    getNVQLK,
  };
  