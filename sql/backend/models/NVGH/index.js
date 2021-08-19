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
        console.log(NVGHData)
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

const getDSHDByID = async(id) => {
    try {
        let pool = await sql.connect(config)
        const list = await pool
        .request()
        .input("MaNVGH", sql.Int, id)
        .execute("getDSHDByID");
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
        .input("MaHD", sql.Int, NVGHData)
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
        .input("MaHD", sql.Int, NVGHData)
        .execute("updateStatusHD_2");
        return update.recordset
    } catch(error) {
        console.log(error.message)
    }
}

const getAllHD = async(NVGHData) => {
    try {
        let pool = await sql.connect(config)
        console.log(NVGHData)
        const list = await pool 
        .request()
        .input("MaNVGH", sql.Int, NVGHData)
        .execute("getAllHD")
        return list.recordset
    } catch(e) {
        console.log(e.message)
    }
}

const getCTHD = async(NVGHData) => {
    try {
        let pool = await sql.connect(config)
        console.log("mahd" + NVGHData)
        const list = await pool
        .request()
        .input("MaHD", sql.Int, NVGHData)
        .execute("getCTHD1")
        return list.recordset
    } catch(e) {
        console.log(e.message)
    }
}

const getTTHD = async(NVGHData) => {
    try {
        let pool = await sql.connect(config)
        const status = await pool
        .request()
        .input("MaHD", sql.Int, NVGHData)
        .execute("getTinhTrangHD")
        return status.recordset
    } catch(e) {
        console.log(e.message)
    }
}
module.exports = {
    checkLogin,
    getAllHoaDon,
    updateSuccessHD,
    updateCancelHD,
    getAllHD,
    getCTHD,
    getTTHD,
    getDSHDByID

}