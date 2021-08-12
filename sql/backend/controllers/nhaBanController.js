const nbData = require("../models/nhaBan");

const getAllHoaDon = async (req, res, next) => {
  try {
    const data = req.body;
    const hoaDonList = await nbData.getHoaDon(data);
    res.send(hoaDonList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addSanPham = async (req, res, next) => {
  try {
    const data = req.body;
    const insert = await nbData.createSP(data);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const capnhatSP = async (req, res, next)  => {
  try {
    const data = req.body;
    const masp = req.params.id;
    const update = await nbData.updateSP(data, masp);
    res.send(update);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const xoaSP = async (req, res, next)  => {
  try {
    const masp = req.params.id;
    const del = await nbData.deleteSP(masp);
    res.send(del);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getNB = async (req, res, next)  => {
  try {
    const layNB = await nbData.getNhaBan();
    res.send(layNB);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const addNB = async (req, res, next) => {
  try {
    const data = req.body;
    const insert = await nbData.createNB(data);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const slgNB = async (req, res, next) => {
  try {
    const sl = await nbData.amountNB();
    res.send(sl);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const slgHD = async (req, res, next) => {
  try {
    const sl = await nbData.amountHD();
    res.send(sl);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const slgSP = async (req, res, next) => {
  try {
    const sl = await nbData.amountSP();
    res.send(sl);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const dtTN = async (req, res, next) => {
  try {
    const data = req.body;
    const dt = await nbData.doanhThu(data);
    res.send(dt);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const CTHD = async (req, res, next) => {
  try {
    const data = req.body;
    const cthd = await nbData.getCTHoaDon(data);
    res.send(cthd);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllHoaDon,
  addSanPham,
  capnhatSP,
  xoaSP,
  getNB,
  addNB,
  slgNB,
  slgHD,
  slgSP,
  dtTN,
  CTHD
};
