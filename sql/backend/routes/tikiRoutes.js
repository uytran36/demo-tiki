const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const nhaBanController = require("../controllers/nhaBanController");
const router = express.Router();

router.get("/khachhang", khachHangController.getAllKhachHang);
router.post("/khachhang", khachHangController.addKhachHang);

router.post("/nhaban/hoadon", nhaBanController.getAllHoaDon);
router.post("/nhaban/sanpham", nhaBanController.addSanPham);
router.put("/nhaban/sanpham/:id", nhaBanController.capnhatSP);
router.delete("/nhaban/sanpham/:id", nhaBanController.xoaSP);
router.get("/nhaban", nhaBanController.getNB);
router.post("/nhaban", nhaBanController.addNB);
router.get("/nhaban/slnb", nhaBanController.slgNB);
router.get("/nhaban/slhd", nhaBanController.slgHD);
router.get("/nhaban/slsp", nhaBanController.slgSP);
router.post("/nhaban/dttn", nhaBanController.dtTN);
router.post("/nhaban/cthd", nhaBanController.CTHD);
module.exports = {
  routes: router,
};
