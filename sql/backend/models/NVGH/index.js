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

module.exports = {
    checkLogin
}