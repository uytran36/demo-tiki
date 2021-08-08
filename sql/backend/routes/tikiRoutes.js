const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const nhaBanController = require("../controllers/nhaBanController");
const router = express.Router();

//khach hang
router.post("/khachhang", khachHangController.getKHByEmail);
router.get("/amountkh", khachHangController.getAmountKhachHang);
router.post("/addkhachhang", khachHangController.addKhachHang);
router.put("/khuyenmai/:id", khachHangController.updateKhuyenMai);
router.get("/sanpham/:page", khachHangController.getSanPhamPage);
router.get("/ctsp/:id", khachHangController.getSanPhamID);
router.get("/nbsp/:id", khachHangController.getNhaBanSP);
router.get("/review/:id", khachHangController.getReviewSP);

//nha ban
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
