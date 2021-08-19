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
        .input("MaQL", sql.Int, NVQLData.MaQL)
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
module.exports = {
    checkLogin,
    danhSachHD_QL,
    danhSachNVGH_QL,
    danhSachSP_QL
}