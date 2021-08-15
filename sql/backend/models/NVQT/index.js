const config = require("../../config");
const sql = require("mssql");


const createNVQLK = async (NVQTData) => {
    try {
      let pool = await sql.connect(config);
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
      const getKH = await pool
      .request()
      .input("page", sql.Int, page)
      .execute('getKhachHang');

      return getKH.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLuongNVGH = async (page) => {
    try {
      let pool = await sql.connect(config);
      const getLuong = await pool
      .request()
      .input("page", sql.Int, page)
      //.input("ngay", sql.Date, ngay)
      .execute('getLuongNVGH');

      return getLuong.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAmountLSBD_NVGH = async () => {
    try {
      let pool = await sql.connect(config);
      const getAmount = await pool
      .request()
      .execute('getAmountLSBD_NVGH');

      return getAmount.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLuongNVQLK = async (page) => {
    try {
      let pool = await sql.connect(config);
      const getLuong = await pool
      .request()
      .input("page", sql.Int, page)
      //.input("ngay", sql.Date, ngay)
      .execute('getLuongNVQLK');

      return getLuong.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAmountLSBD_NVQLK = async () => {
    try {
      let pool = await sql.connect(config);
      const getAmount = await pool
      .request()
      .execute('getAmountLSBD_NVQLK');

      return getAmount.recordset;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getNVQLK = async () => {
    try {
      let pool = await sql.connect(config);
      const getNVQLK = await pool
      .request()
      .execute('getNVQLK');

      return getNVQLK.recordset;
    } catch (error) {
      console.log(error.message);
    }
  }

  const deleteNVQLK = async (MaNV) => {
    try{
      let pool = await sql.connect(config);
      const deleteNVQLK = await pool
      .request()
      .input("MaNV", sql.Int, MaNV)
      .execute('deleteNVQLK')

      return deleteNVQLK.recordset;
    } catch (error) {
      console.log(error.message);
    }
  }

  const updateNVQLK = async (MaNV, NVQTData) => {
    try{
      let pool = await sql.connect(config);
      const updateNVQLK = await pool
      .request()
      .input("MaNV", sql.Int, MaNV)
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
      .execute('updateNVQLK')

      return updateNVQLK.recordset;
    } catch (error) {
      console.log(error.message);
    }
  }

  const getDSNB = async (page) => {
    try {
      let pool = await sql.connect(config);
      const getNB = await pool
      .request()
      .input("page", sql.Int, page)
      .execute('getDSNB');

      return getNB.recordset;
    } catch (error) {
      console.log(error.message);
    }
  }

  const deleteNhaBan = async (MaNB) => {
    try{
      let pool = await sql.connect(config);
      const deleteNVQLK = await pool
      .request()
      .input("MaNB", sql.Int, MaNB)
      .execute('deleteNB')

      return deleteNVQLK.recordset;
    } catch (error) {
      console.log(error.message);
    }
  }

  const updateNhaBan = async (MaNB, NBData) => {
    try{
      let pool = await sql.connect(config);
      const updateNhaBan = await pool
      .request()
      .input("MaNB", sql.Int, MaNB)
      .input("TenNhaBan", sql.NVarchar(100), NBData.TenNhaBan)
      .input("SDTNhaBan", sql.Char(10), NBData.SDTNhaBan)
      .input("EmailNhaBan", sql.Char(100), NBData.EmailNhaBan)
      .input("DiaChiNhaBan", sql.NVarchar(255), NBData.DiaChiNhaBan)
      .input("MatKhauNhaBan", sql.Varchar(50), NBData.MatKhauNhaBan)
      .execute('updateNhaBan')

      return updateNhaBan.recordset;
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
    deleteNVQLK,
    updateNVQLK,
    getDSNB,
    deleteNhaBan,
    updateNhaBan
  };
  