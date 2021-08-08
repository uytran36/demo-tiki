const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getKhachHangByEmail = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    const khachHangList = await pool
      .request()
      .input("Email", sql.NVarChar(50), data.email)
      .query(sqlQueries.getKhachHangEmail);
    return khachHangList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getAmountKH = async () => {
   try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    const amount = await pool
      .request()
      .query(sqlQueries.getAmountKH);
    return amount.recordset;
  } catch (error) {
    console.log(error.message);
  }
}

const createKH = async (khachHangData) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");

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

const updateKM = async (maKhuyenMai, khuyenMaiData) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    console.log(khuyenMaiData);
    const insertKH = await pool
      .request()
      .input("MaKM", sql.Int, maKhuyenMai)
      .input("Ten", sql.NVarChar(50), khuyenMaiData.Ten)
      .query(sqlQueries.updateKhuyenMai);
    return insertKH.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const getSPPage = async(page) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    const sanPhamList = await pool
      .request()
      .input("page", sql.Int, page)
      .query(sqlQueries.getSPPage);
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
}

const getSPID = async(id) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    const sanPhamList = await pool
      .request()
      .input("MaSP", sql.Int, id)
      .query(sqlQueries.getSPID);
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
}

const getNBSP = async (id) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    const sanPhamList = await pool
      .request()
      .input("MaSP", sql.Int, id)
      .query(sqlQueries.getNBSP);
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
}

const getReview = async (id) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("khachHang");
    const sanPhamList = await pool
      .request()
      .input("MaSP", sql.Int, id)
      .query(sqlQueries.getReview);
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getKhachHangByEmail,
  getAmountKH,
  createKH,
  updateKM,
  getSPPage,
  getSPID,
  getNBSP,
  getReview,
};
