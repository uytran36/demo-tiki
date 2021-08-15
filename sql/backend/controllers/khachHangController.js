const khData = require("../models/khachHang");

const getKHByEmail = async (req, res, next) => {
  try {
    const data = req.body;
    const kh = await khData.getKhachHangByEmail(data);
    res.send(kh)
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
};

const getAmountSanPham = async (req, res, next) => {
  try {
    const amount = await khData.getAmountSP();
    res.send(amount);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSPType = async (req, res, next) => {
  try {
    const type = req.params.type;
    const page = req.params.page;
    const SPList = await khData.getSP_Type(type, page);
    res.send(SPList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAmountSPType = async (req, res, next) => {
  try {
    const type = req.params.type;
    const amount = await khData.getAmountSP_type(type);
    res.send(amount);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSanPhamID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const SP = await khData.getSPID(id);
    res.send(SP);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getNhaBanSP = async (req, res, next) => {
  try {
    const id = req.params.id;
    const NB = await khData.getNBSP(id);
    res.send(NB);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getReviewSP = async (req, res, next) => {
  try {
    const id = req.params.id;
    const review = await khData.getReview(id);
    res.send(review);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createHD = async (req, res, next) => {
  try {
    const hd = req.body;
    const insertHd = await khData.createHoaDon(hd);
    res.send(insertHd);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createCTHD = async (req, res, next) => {
  try {
    const cthd = req.body;
    const insertCthd = await khData.createCT_HoaDon(cthd);
    res.send(insertCthd);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAmountCT_HoaDon = async (req, res, next) => {
  try {
    const amount = await khData.getAmountCTHD();
    res.send(amount);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAmountSanPhamByName = async (req, res, next) => {
  try {
    const str = req.params.str;
    const amount = await khData.getAmountSPByName(str);
    res.send(amount);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const findSanPham = async (req, res, next) => {
  try {
    const str = req.params.str;
    const page = req.params.page;
    const listSP = await khData.findSP(str, page);
    res.send(listSP);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateKhachHang = async(req, res, next) => {
  try {
    const MaKH = req.params.id;
    const data = req.body;
    const update = await khData.updateKH(MaKH, data);
    res.send(update);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getDiscountKH = async (req, res, next) => {
  try {
    const id = req.params.id;
    const discount = await khData.getDiscount(id);
    res.send(discount);
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
  getAmountSanPham,
  getSPType,
  getAmountSPType,
  getSanPhamID,
  getNhaBanSP,
  getReviewSP,
  createHD,
  createCTHD,
  getAmountCT_HoaDon,
  getAmountSanPhamByName,
  findSanPham,
  updateKhachHang,
  getDiscountKH,
};
