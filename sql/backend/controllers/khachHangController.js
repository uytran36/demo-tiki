const khData = require("../models/khachHang");

const getAllKhachHang = async (req, res, next) => {
  try {
    const khachHangList = await khData.getKhachHang();
    res.send(khachHangList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addKhachHang = async (req, res, next) => {
  try {
    const data = req.body;
    const insert = await khData.createKH(data);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllKhachHang,
  addKhachHang,
};
