const config = require("../../config");
const sql = require("mssql");

const danhSachNVGH = async(NVQLData, page) => {
    try {
        let pool = await sql.connect(config);
        const listNVGH = await pool
        .request()
        .input("MaQL", sql.Int, NVQLData.MaQL)
        exec
    }
}