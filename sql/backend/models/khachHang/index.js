const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getKhachHangByEmail = async (data) => {
  try {
    let pool = await sql.connect(config);
    const kh = await pool
      .request()
      .input("Email", sql.NVarChar(50), data.email)
      .input("MatKhau", sql.VarChar(50), data.password)
      .execute("getKHBy_EmailPass");
    return kh.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getAmountKH = async () => {
  try {
    let pool = await sql.connect(config);
    const amount = await pool.request().execute("getAmountKH");
    return amount.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const createKH = async (khachHangData) => {
  try {
    let pool = await sql.connect(config);
    const insertKH = await pool
      .request()
      .input("MaKH", sql.Int, khachHangData.MaKH)
      .input("Ten", sql.NVarChar(50), khachHangData.Ten)
      .input("Sdt", sql.Char(10), khachHangData.Sdt)
      .input("SoNha", sql.VarChar(50), khachHangData.SoNha)
      .input("Duong", sql.NVarChar(50), khachHangData.Duong)
      .input("Phuong", sql.NVarChar(50), khachHangData.Phuong)
      .input("Quan", sql.NVarChar(50), khachHangData.Quan)
      .input("ThanhPho", sql.NVarChar(50), khachHangData.ThanhPho)
      .input("Email", sql.NVarChar(50), khachHangData.Email)
      .input("MatKhau", sql.VarChar(50), khachHangData.MatKhau)
      .input("GioiTinh", sql.NVarChar(3), khachHangData.GioiTinh)
      .input("NgaySinh", sql.Date, khachHangData.NgaySinh)
      .input("TikiXu", sql.Int, khachHangData.TikiXu)
      .execute("createKH");
    return insertKH.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const getSPPage = async (page) => {
  try {
    let pool = await sql.connect(config);
    const sanPhamList = await pool
      .request()
      .input("PageNumber", sql.Int, page)
      .execute("getSP");
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getAmountSP = async () => {
  try {
    let pool = await sql.connect(config);
    const amount = await pool.request().execute("getCountTotSP");
    return amount.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getSP_Type = async (MaLoaiSP, PageNumber) => {
  try {
    let pool = await sql.connect(config);
    const sanPhamList = await pool
      .request()
      .input("MaLoaiSP", sql.Int, MaLoaiSP)
      .input("PageNumber", sql.Int, PageNumber)
      .execute("getSP_Type");
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getAmountSP_type = async (MaLoaiSP) => {
  try {
    let pool = await sql.connect(config);
    const amount = await pool
      .request()
      .input("MaLoaiSP", sql.Int, MaLoaiSP)
      .execute("getCountTotSP_Type");
    return amount.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getSPID = async (id) => {
  try {
    let pool = await sql.connect(config);
    const sanPhamList = await pool
      .request()
      .input("MaSP", sql.Int, id)
      .execute("getSPID");
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getNBSP = async (id) => {
  try {
    let pool = await sql.connect(config);
    const sanPhamList = await pool
      .request()
      .input("MaSP", sql.Int, id)
      .execute("getNBSP");
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getReview = async (id) => {
  try {
    let pool = await sql.connect(config);
    const sanPhamList = await pool
      .request()
      .input("MaSP", sql.Int, id)
      .execute("getReview");
    return sanPhamList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const createHoaDon = async (hdData) => {
  try {
    let pool = await sql.connect(config);
    const createHD = await pool
      .request()
      .input("MaKH", sql.Int, hdData.MaKH)
      .input("MaNVGH", sql.Int, hdData.MaNVGH)
      .input("MaKMai", sql.Int, hdData.MaKMai)
      .input("NgayLap", sql.Date, hdData.NgayLap)
      .input("TongTien", sql.Int, hdData.TongTien)
      .input("TinhTrang", sql.NVarChar(255), hdData.TinhTrang)
      .input("SLTikiXu", sql.Int, hdData.SLTikiXu)
      .input("PhiVC", sql.Int, hdData.PhiVC)
      .input("ThanhTienHD", sql.Int, hdData.ThanhTienHD)
      .input("NgayGiaoTC", sql.DateTime, hdData.NgayGiaoTC)
      .input("GhiChu", sql.NVarChar(255), hdData.GhiChu)
      .execute("createHD_CTHD");
    return createHD.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const createCT_HoaDon = async (cthdData) => {
  try {
    let pool = await sql.connect(config);
    const createCTHD = await pool
      .request()
      .input("MaHD", sql.Int, cthdData.MaHD)
      .input("MaSP", sql.Int, cthdData.MaSP)
      .input("SoLuong", sql.Int, cthdData.SoLuong)
      .input("ThanhTien", sql.BigInt, cthdData.ThanhTien)
      .input("MaCTHD", sql.Int, cthdData.MaCTHD)
      .execute("createCTHD");
    return createCTHD.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const getAmountCTHD = async () => {
  try {
    let pool = await sql.connect(config);
    const amount = await pool.request().execute("getAmountCTHD");
    return amount.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getAmountSPByName = async (str) => {
  try {
    let pool = await sql.connect(config);
    const listSP = await pool
      .request()
      .input("str", sql.NVarChar(255), str)
      .execute("getAmountSPByName");
    return listSP.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const findSP = async (str, page) => {
  try {
    let pool = await sql.connect(config);
    const listSP = await pool
      .request()
      .input("str", sql.NVarChar(255), str)
      .input("PageNumber", sql.Int, page)
      .execute("findSP");
    return listSP.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const updateKH = async (MaKH, khachHangData) => {
  try {
    let pool = await sql.connect(config);
    const listSP = await pool
      .request()
      .input("MaKH", sql.Int, MaKH)
      .input("Ten", sql.NVarChar(50), khachHangData.Ten)
      .input("Sdt", sql.Char(10), khachHangData.Sdt)
      .input("SoNha", sql.Char(10), khachHangData.SoNha)
      .input("Duong", sql.NVarChar(50), khachHangData.Duong)
      .input("Phuong", sql.NVarChar(50), khachHangData.Phuong)
      .input("Quan", sql.NVarChar(50), khachHangData.Quan)
      .input("ThanhPho", sql.NVarChar(50), khachHangData.ThanhPho)
      .input("MatKhau", sql.VarChar(50), khachHangData.MatKhau)
      .input("GioiTinh", sql.NVarChar(3), khachHangData.GioiTinh)
      .input("NgaySinh", sql.Date, khachHangData.NgaySinh)
      .execute("update_KH");
    return listSP.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getDiscount = async (id) => {
  try {
    let pool = await sql.connect(config);
    const discount = await pool
      .request()
      .input("MaKH", sql.Int, id)
      .execute("getDiscount");
    return discount.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getHDKH = async (MaKH) => {
  try {
    let pool = await sql.connect(config);
    const listHD = await pool
      .request()
      .input("MaKH", sql.Int, MaKH)
      .execute("getHDKH");
    return listHD.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getCTHD = async (MaHD) => {
  try {
    let pool = await sql.connect(config);
    const listCTHD = await pool
      .request()
      .input("MaHD", sql.Int, MaHD)
      .execute("getCTHD");
    return listCTHD.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getSPKH = async (MaKH) => {
  try {
    let pool = await sql.connect(config);
    const listSP = await pool
      .request()
      .input("MaKH", sql.Int, MaKH)
      .execute("getSPKH");
    return listSP.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const insertRating = async (MaKH, MaSP, rating) => {
  try {
    let pool = await sql.connect(config);
    const insert = await pool
      .request()
      .input("MaKH", sql.Int, MaKH)
      .input("MaSP", sql.Int, MaSP)
      .input("DiemDanhGia", sql.Float, rating.DiemDanhGia)
      .input("MoTa", sql.NVarChar(255), rating.MoTa)
      .execute("ratingSP");
    return insert.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
};

const getKM = async (MaKH, MaKM) => {
  try {
    let pool = await sql.connect(config);
    const km = await pool
      .request()
      .input("MaKH", sql.Int, MaKH)
      .input("MaKM", sql.Int, MaKM)
      .execute("getKM");
    return km.recordset;
  } catch (error) {
    console.log("error");
    return error.message;
  }
}

module.exports = {
  getKhachHangByEmail,
  getAmountKH,
  createKH,
  getSPPage,
  getAmountSP,
  getSP_Type,
  getAmountSP_type,
  getSPID,
  getNBSP,
  getReview,
  createHoaDon,
  createCT_HoaDon,
  getAmountCTHD,
  getAmountSPByName,
  findSP,
  updateKH,
  getDiscount,
  getHDKH,
  getCTHD,
  getSPKH,
  insertRating,
  getKM,
};
