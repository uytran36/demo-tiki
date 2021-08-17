const khData = require("../models/khachHang");

const getKHByEmail = async (req, res, next) => {
  try {
    const data = req.body;
    const khachHangList = await khData.getKhachHangByEmail(data);
    console.log(khachHangList);
    if (khachHangList[0].MatKhau === data.password) {
      res.send(khachHangList[0]);
    }
    else {
      res.send([]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAmountKhachHang = async (req, res, next) => {
  try {
    const data = req.body;
    const amount = await khData.getAmountKH();
    res.send(amount);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const addKhachHang = async (req, res, next) => {
  try {
    const data = req.body;
    const insert = await khData.createKH(data);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateKhuyenMai = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params.id;

    const update = await khData.updateKM(id, data);
    res.send(update);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSanPhamPage = async (req, res, next) => {
  try {
    const page = req.params.page;
    const SPList = await khData.getSPPage(page);
    res.send(SPList);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getSanPhamID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const SP = await khData.getSPID(id);
    res.send(SP);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addKhachHang,
  updateKhuyenMai,
  getKHByEmail,
  getAmountKhachHang,
  getSanPhamPage,
  getSanPhamID,
};
