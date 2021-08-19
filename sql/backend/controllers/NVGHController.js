const ghData = require("../models/NVGH");


const loginNVGH = async(req, res, next) => {
    try {
        const data = req.body;
        const login = await ghData.checkLogin(data)
        res.send(login)
    } catch (error) {
        res.status(400).send(error.message);
      }
}

const getAllHoaDonByID = async(req, res, next) => {
    try {
        const id = req.params.id
        const page = req.params.page
        const list = await ghData.getAllHoaDon(id, page)
        res.send(list)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateSuccessHD = async(req, res, next) => {
    try {
        const id = req.params.id;
        const status = await ghData.updateSuccessHD(id)
        res.send(status)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateCancelHD = async(req, res, next) => {
    try {
        const id = req.params.id;
        const status = await ghData.updateCancelHD(id)
        res.send(status)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAmountHD = async(req, res, next) => {
    try {
        const id = req.params.id
        const list = await ghData.getAllHD(id)
        res.send(list)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getCTHDByID = async(req, res, next) => {
    try {
        const id = req.params.id;
        const cthd = await ghData.getCTHD(id)
        res.send(cthd)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getStatusHD = async(req, res, next) => {
    try {
        const id = req.params.id;
        const status = await ghData.getTTHD(id)
        res.send(status)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    loginNVGH,
    getAllHoaDonByID,
    updateCancelHD,
    updateSuccessHD,
    getAmountHD,
    getCTHDByID,
    getStatusHD
    
}