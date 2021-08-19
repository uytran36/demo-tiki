const nvData = require("../models/NVQL");

const getListNVGH = async(req, res, next) => {
    try {
        const id = req.params.id
        const list = await nvData.danhSachNVGH_QL(id)
        res.send(list)
    } catch (error) {
        res.status(400).send(error.message);
      }
}

const checkLoginNVQL = async(req, res, next) => {
    try {
        const data = req.body;
        const login = await nvData.checkLogin(data)
        res.send(login)
    } catch (error) {
        res.status(400).send(error.message);
      }
}

const getListSP = async(req, res, next) => {
    try {
        const id = req.params.id
        const login = await nvData.danhSachSP_QL(id)
        res.send(login)
    } catch (error) {
        res.status(400).send(error.message);
      }
}

const getListHD = async(req, res, next) => {
    try {
        const id = req.params.id
        const login = await nvData.danhSachHD_QL(id)
        res.send(login)
    } catch (error) {
        res.status(400).send(error.message);
      }
}

module.exports = {
    getListNVGH,
    checkLoginNVQL,
    getListHD,
    getListSP

}