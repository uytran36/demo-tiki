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
router.get("/amountsp", khachHangController.getAmountSanPham);
router.get("/loaisp/:type/:page", khachHangController.getSPType);
router.get("/amountloaisp/:type", khachHangController.getAmountSPType);
router.get("/ctsp/:id", khachHangController.getSanPhamID);
router.get("/nbsp/:id", khachHangController.getNhaBanSP);
router.get("/review/:id", khachHangController.getReviewSP);
router.post("/createhd", khachHangController.createHD);
router.post("/createcthd", khachHangController.createCTHD);
router.get("/amountcthd", khachHangController.getAmountCT_HoaDon);
router.get("/amountspbyname/:str", khachHangController.getAmountSanPhamByName)
router.get("/find/:str/:page", khachHangController.findSanPham)
router.put("/khachhang/:id",khachHangController.updateKhachHang);
router.get("/discount/:id", khachHangController.getDiscountKH);

//nha ban
router.post("/nhaban/hoadon", nhaBanController.getAllHoaDon);
router.post("/nhaban/sanpham", nhaBanController.addSanPham);
router.put("/nhaban/sanpham/:id", nhaBanController.capnhatSP);
router.delete("/nhaban/sanpham/:id", nhaBanController.xoaSP);
router.get("/nhaban", nhaBanController.getNB);
router.put("/nhaban/:id", nhaBanController.capnhatNB);
router.post("/nhaban", nhaBanController.addNB);
router.get("/nhaban/slnb", nhaBanController.slgNB);
router.get("/nhaban/slhd", nhaBanController.slgHD);
router.get("/nhaban/slsp", nhaBanController.slgSP);
router.post("/nhaban/dttn", nhaBanController.dtTN);
router.post("/nhaban/cthd", nhaBanController.CTHD);
router.post("/nhaban/splist", nhaBanController.getSP);
router.get("/nhaban/hoadon/:id", nhaBanController.get1HD);
module.exports = {
  routes: router,
};
