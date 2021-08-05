const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const router = express.Router();

router.get("/khachhang", khachHangController.getAllKhachHang);
router.post("/khachhang", khachHangController.addKhachHang);

module.exports = {
  routes: router,
};
