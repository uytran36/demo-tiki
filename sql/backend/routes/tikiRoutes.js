const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const nhaBanController = require("../controllers/nhaBanController");
const NVQTController = require("../controllers/NVQTController");
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
router.post("/nhaban/thang", nhaBanController.dtThanghmot);


router.post("/NVQT/taoNVQLK", NVQTController.addNhanVien);
router.get("/NVQT/listKH/:page",NVQTController.getKH);
router.get("/NVQT/listLuongNVGH/:page", NVQTController.getBDL_NVGH)
router.get("/NVQT/AmountLSBDL_NVGH", NVQTController.SL_LSBDL_NVGH)
router.get("/NVQT/AmountLSBDL_NVQLK", NVQTController.SL_LSBDL_NVQLK)
router.get("/NVQT/listLuongNVQLK/:page", NVQTController.getBDL_NVQLK)
router.get("/NVQT/listNVQLK/", NVQTController.layNVQLK)
router.delete("/NVQT/xoaNVQLK/:MaNV", NVQTController.xoaNVQLK)
router.put("/NVQT/EditNVQLK/:MaNV", NVQTController.editNVQLK)
router.put("/NVQT/UpdateAuthNVQLK/:MaNV", NVQTController.updateAuth)
router.get("/NVQT/topKhachHang/:NgayLap", NVQTController.topKhachHang)
router.get("/NVQT/listNhaBan/:page", NVQTController.getNB)
router.put("/NVQT/editNB/:MaNhaBan", NVQTController.editNB)
router.post("/NVQT/taoKhuyenMai", NVQTController.taoKhuyenMai)
router.get("/NVQT/dsKho", NVQTController.dsKho)
router.post("/NVQT/LogIn", NVQTController.LogIn)

module.exports = {
  routes: router,
};
