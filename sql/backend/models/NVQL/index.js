const config = require("../../config");
const sql = require("mssql");

const checkLogin = async(NVQLData) => {
    try {
        let pool = await sql.connect(config)
        const check = await pool 
        .request()
        .input("Email", sql.NVarChar(50), NVQLData.Email)
        .input("MatKhau", sql.NVarChar(20), NVQLData.MatKhau)
        .execute("checkLoginNVQL");
        return check.recordset
    } catch (error) {
        console.log(error.message);
    }
}

const danhSachNVGH_QL = async(NVQLData) => {
    try {
        let pool = await sql.connect(config);
        const listNVGH = await pool
        .request()
        .input("MaNV", sql.Int, NVQLData)
        execute("getDSGHByIDQL")
        return listNVGH.recordset
    } catch (e) {
        console.log(e)
    }
}

const danhSachHD_QL = async(NVQLData) => {
    try {
        let pool = await sql.connect(config);
        const listHD = await pool
        .request()
        .input("MaNV", sql.Int, NVQLData)
        execute("getDSHDByID_QL")
        return listHD.recordset
    } catch (e) {
        console.log(e)
    }
}

const danhSachSP_QL = async(NVQLData) => {
    try {
        let pool = await sql.connect(config);
        const listHD = await pool
        .request()
        .input("MaNV", sql.Int, NVQLData)
        execute("getDSSPByIDQL")
        return listHD.recordset
    } catch (e) {
        console.log(e)
    }
}

const createNVGH = async(NVQLData) => {
    try {
        let pool = await sql.connect(config);
        const insert = await pool
        .request()
        .input("MaNV", sql.Int, NVQLData.MaNV)
        .input("Ten", sql.NVarChar(50), NVQLData.Ten)
        .input("GioiTinh", sql.NChar(3), NVQLData.GioiTinh)
        .input("Sdt" , sql.Char(10), NVQLData.Sdt)
        .input("NgaySinh".Char(10), NVQLData.NgaySinh)
        .input("SoNha", sql.Char(20), NVQLData.SoNha)
        .input("Duong", sql.NVarChar(50), NVQLData.Duong)
        .input("Phuong", sql.NVarChar(50), NVQLData.Phuong)
        .input("Quan", sql.NVarChar(50), NVQLData.Quan)
        .input("ThanhPho", sql.NVarChar(50), NVQLData.ThanhPho)
        .input("Email", sql.NVarChar(50), NVQLData.Email)
        .input("NgayVaoLam", sql.Date, NVQLData.NgayVaoLam)
        .input("Luong", sql.BigInt, NVQLData.Luong)
        .input("DonHangDaGiao", sql.Int, NVQLData.DonHangDaGiao)
        .input("MaQL", sql.Int, NVQLData.MaQL)
        .execute("createNVGH_QL")
        return insert.recordset

    }catch (error) {
        console.log(error);
        return error.message;
      }
}

const getNVGHById = async(NVQLData) =>  {
    try {
        let pool = await sql.connect(config);
        const data = await pool
        .request()
        .input("MaNV", sql.Int, NVQLData)
        .execute("getNVGHByID_QL")
        return data.recordset
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

const deleteNVGH = async(NVQLData) => {
    try {
        let pool = await sql.connect(config);
        const data = await pool
        .request()
        .input("MaNV", sql.Int, NVQLData)
        .execute("deleteNVGH_QL")
        return data.recordset
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

const updateNVGH = async(NVQLData, id) => {
    try {
        let pool = await sql.connect(config);
        const data = await pool
        .request()
        .input("MaNV", sql.Int, id)
        .input("Ten", sql.NVarChar(50), NVQLData.Ten)
        .input("GioiTinh", sql.NChar(3), NVQLData.GioiTinh)
        .input("Sdt" , sql.Char(10), NVQLData.Sdt)
        .input("NgaySinh".Char(10), NVQLData.NgaySinh)
        .input("SoNha", sql.Char(20), NVQLData.SoNha)
        .input("Duong", sql.NVarChar(50), NVQLData.Duong)
        .input("Phuong", sql.NVarChar(50), NVQLData.Phuong)
        .input("Quan", sql.NVarChar(50), NVQLData.Quan)
        .input("ThanhPho", sql.NVarChar(50), NVQLData.ThanhPho)
        .input("Email", sql.NVarChar(50), NVQLData.Email)
        .input("NgayVaoLam", sql.Date, NVQLData.NgayVaoLam)
        .input("Luong", sql.BigInt, NVQLData.Luong)
        .input("DonHangDaGiao", sql.Int, NVQLData.DonHangDaGiao)
        .input("MaQL", sql.Int, NVQLData.MaQL)
        .execute("updateNVGH_QL")
        return data.recordset
    } catch (error) {
        console.log(error);
        return error.message;
    }
}
module.exports = {
    checkLogin,
    danhSachHD_QL,
    danhSachNVGH_QL,
    danhSachSP_QL,
    createNVGH,
    getNVGHById, 
    deleteNVGH,
    updateNVGH

}