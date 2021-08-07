const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const router = express.Router();

router.post("/khachhang", khachHangController.getKHByEmail);
router.get("/amountkh", khachHangController.getAmountKhachHang);
router.post("/addkhachhang", khachHangController.addKhachHang);
router.put("/khuyenmai/:id", khachHangController.updateKhuyenMai);
router.get("/sanpham/:page", khachHangController.getSanPhamPage);
router.get("/ctsp/:id", khachHangController.getSanPhamID);

module.exports = {
  routes: router,
};
