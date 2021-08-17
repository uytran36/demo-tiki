const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const createSP = async (sanPhamData) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    console.log(sanPhamData);
    const insertSP = await pool
      .request()
      .input("MaSP", sql.Int, sanPhamData.MaSP)
      .input("TenSP", sql.NVarChar(100), sanPhamData.TenSP)
      .input("MoTaSP", sql.NVarChar(255), sanPhamData.MoTaSP)
      .input("SLTonSP", sql.Int, sanPhamData.SLTonSP)
      .input("GiaBanSP", sql.Int, sanPhamData.GiaBanSP)
      .input("GiaGiamSP", sql.Int, sanPhamData.GiaGiamSP)
      .input("ThanhTienSP", sql.Int, sanPhamData.ThanhTienSP)
      .input("HoaHong", sql.Float, sanPhamData.HoaHong)
      .input("MaLoaiSP", sql.Int, sanPhamData.MaLoaiSP)
      .input("MaNhaBan", sql.Int, sanPhamData.MaNhaBan)
      .input("url", sql.VarChar(255), sanPhamData.url)
      .query(sqlQueries.createSanPham);
    return insertSP.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const updateSP = async (sanPhamData, MaSP) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const updateSP = await pool
      .request()
      .input("MaSP", sql.Int, MaSP)
      .input("TenSP", sql.NVarChar(100), sanPhamData.TenSP)
      .input("MoTaSP", sql.NVarChar(255), sanPhamData.MoTaSP)
      .input("SLTonSP", sql.Int, sanPhamData.SLTonSP)
      .input("GiaBanSP", sql.Int, sanPhamData.GiaBanSP)
      .input("GiaGiamSP", sql.Int, sanPhamData.GiaGiamSP)
      .input("ThanhTienSP", sql.Int, sanPhamData.ThanhTienSP)
      .input("HoaHong", sql.Float, sanPhamData.HoaHong)
      .input("MaLoaiSP", sql.Int, sanPhamData.MaLoaiSP)
      .input("MaNhaBan", sql.Int, sanPhamData.MaNhaBan)
      .input("url", sql.VarChar(255), sanPhamData.url)
      .query(sqlQueries.updateSanPham);
    return updateSP.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const deleteSP = async (MaSP) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const xoaSP = await pool
      .request()
      .input("MaSP", sql.Int, MaSP)
      .query(sqlQueries.deleteSanPham);
    return xoaSP.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getNhaBan = async () => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const getNB = await pool.request().query(sqlQueries.login);
    return getNB.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const createNB = async (nhaBanData) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    console.log(nhaBanData);
    const insertNB = await pool
      .request()
      .input("MaNhaBan", sql.Int, nhaBanData.MaNhaBan)
      .input("TenNhaBan", sql.NVarChar(100), nhaBanData.TenNhaBan)
      .input("SDTNhaBan", sql.Char(10), nhaBanData.SDTNhaBan)
      .input("EmailNhaBan", sql.NChar(100), nhaBanData.EmailNhaBan)
      .input("DiaChiNhaBan", sql.NVarChar(255), nhaBanData.DiaChiNhaBan)
      .input("MatKhauNhaBan", sql.VarChar(50), nhaBanData.MatKhauNhaBan)
      .input("MaHopDong", sql.Int, nhaBanData.MaHopDong)
      .input("NgayLapHD", sql.Date, nhaBanData.NgayLapHD)
      .input("NgayHetHanHD", sql.Date, nhaBanData.NgayHetHanHD)
      .input("MoTaHD", sql.NVarChar(255), nhaBanData.MoTaHD)
      .query(sqlQueries.createNhaBan);
    return insertNB.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const amountNB = async () => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const getNB = await pool.request().query(sqlQueries.amountNhaBan);
    return getNB.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const amountHD = async () => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const getNB = await pool.request().query(sqlQueries.amountHopDong);
    return getNB.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const amountSP = async () => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const getNB = await pool.request().query(sqlQueries.amountSanPham);
    return getNB.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const doanhThu = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");

    const getNB = await pool
      .request()
      .input("MaNhaBan", sql.Int, data.MaNhaBan)
      .input("NgayGiaoTC", sql.Date, data.NgayGiaoTC)
      .query(sqlQueries.doanhThuTN);
    return getNB.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getCTHoaDon = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const CThoaDonList = await pool
      .request()
      .input("MaNhaBan", sql.Int, data.MaNhaBan)
      .query(sqlQueries.CTHDList);
    return CThoaDonList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getHoaDon = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const hoaDonList = await pool
      .request()
      .input("MaNhaBan", sql.Int, data.MaNhaBan)
      .query(sqlQueries.hoaDonList);

    return hoaDonList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getSanPham = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const getNB = await pool
      .request()
      .input("MaNhaBan", sql.Int, data.MaNhaBan)
      .query(sqlQueries.sanPhamList);
    return getNB.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const updateNB = async (nhaBanData, MaNhaBan) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    console.log(nhaBanData);
    const updateNB = await pool
      .request()
      .input("MaNhaBan", sql.Int, MaNhaBan)
      .input("TenNhaBan", sql.NVarChar(100), nhaBanData.TenNhaBan)
      .input("SDTNhaBan", sql.Char(10), nhaBanData.SDTNhaBan)
      .input("EmailNhaBan", sql.NChar(100), nhaBanData.EmailNhaBan)
      .input("DiaChiNhaBan", sql.NVarChar(255), nhaBanData.DiaChiNhaBan)
      .input("MatKhauNhaBan", sql.VarChar(50), nhaBanData.MatKhauNhaBan)
      .query(sqlQueries.updateNhaBan);
    return updateNB.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const getOneHD = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const get = await pool
      .request()
      .input("MaHD", sql.Int, data)
      .query(sqlQueries.getOneHoaDon);
    return get.recordset;
  } catch (error) {
    console.log(error.message);
  }
};


const dtMonthmot = async (data) => {
  try {
    let pool = await sql.connect(config);
    const sqlQueries = await utils.loadSqlQueries("nhaBan");
    const getNB = await pool
      .request()
      .input("MaNhaBan", sql.Int, data.MaNhaBan)
      .input("thang", sql.Int, data.thang)
      .query(sqlQueries.thangMot);
    return getNB.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getHoaDon,
  createSP,
  updateSP,
  deleteSP,
  getNhaBan,
  createNB,
  amountNB,
  amountHD,
  amountSP,
  doanhThu,
  getCTHoaDon,
  getSanPham,
  updateNB,
  getOneHD,
  dtMonthmot

};
