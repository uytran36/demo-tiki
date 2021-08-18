const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const checkLogin = async(NVGHData) => {
    try {
        let pool = await sql.connect(config)
        const check = await pool 
        .request()
        .input("Email", sql.NVarChar(50), NVGHData.Email)
        .input("MatKhau", sql.NVarChar(20), NVGHData.MatKhau)
        .execute("checkLoginNVGH");
        return check.recordset
    } catch (error) {
        console.log(error.message);
    }
}

const getAllHoaDon = async(id, page) => {
    try {
        let pool = await sql.connect(config)
        const list = await pool
        .request()
        .input("MaNVGH", sql.Int, id)
        .input("page", sql.Int, page)
        .execute("getHoaDonByIDGH");
        return list.recordset
    } catch(error) {
        console.log(error.message);
    }
}

const updateSuccessHD = async(NVGHData) => {
    try {
        let pool = await sql.connect(config)
        const update = await pool
        .request()
        .input("MaHD", sql.Int, NVGHData.MaHD)
        .input("MaNVGH", sql.Int, NVGHData.MaNVGH)
        .execute("updateStatusHD_1");
        return update.recordset
    } catch(error) {
        console.log(error.message)
    }
}

const updateCancelHD = async(NVGHData) => {
    try {
        let pool = await sql.connect(config)
        const update = await pool
        .request()
        .input("MaHD", sql.Int, NVGHData.MaHD)
        .input("MaNVGH", sql.Int, NVGHData.MaNVGH)
        .execute("updateStatusHD_2");
        return update.recordset
    } catch(error) {
        console.log(error.message)
    }
}
module.exports = {
    checkLogin,
    getAllHoaDon,
    updateSuccessHD,
    updateCancelHD
}