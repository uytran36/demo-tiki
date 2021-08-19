const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const nhaBanController = require("../controllers/nhaBanController");
const NVQTController = require("../controllers/NVQTController");
const NVGHController = require("../controllers/NVGHController");
const NVQLController = require("../controllers/NVQLController");
const router = express.Router();

//khach hang
router.post("/khachhang", khachHangController.getKHByEmail);
router.get("/amountkh", khachHangController.getAmountKhachHang);
router.post("/addkhachhang", khachHangController.addKhachHang);
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
router.get("/amountspbyname/:str", khachHangController.getAmountSanPhamByName);
router.get("/find/:str/:page", khachHangController.findSanPham);
router.put("/khachhang/:id", khachHangController.updateKhachHang);
router.get("/discount/:id", khachHangController.getDiscountKH);
router.get("/hdkh/:id", khachHangController.getHDKhachHang);
router.get("/cthd/:id", khachHangController.getCTHoaDon);
router.get("/spkh/:id", khachHangController.getSPKhachHang);
router.post("/rating/:id/:masp", khachHangController.insertRatingSP);
router.get("/khuyenmai/:kh/:km", khachHangController.getKhuyenMai);

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
router.get("/nhaban/doanhthu/:id", nhaBanController.dtThang);

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
router.get("/NVQT/DTTT/:NamLap", NVQTController.DTTT)
router.get("/NVQT/DTHD/:NamLap",NVQTController.DTHD)

router.post("/NVGH/login", NVGHController.loginNVGH)
router.get("/NVGH/listHD/:id/:page", NVGHController.getAllHoaDonByID)
router.get("/NVGH/getAmountHD/:id", NVGHController.getAmountHD)
router.get("/NVGH/cthd/:id", NVGHController.getCTHDByID)
router.get("/NVGH/updateStatus1/:id", NVGHController.updateSuccessHD)
router.get("/NVGH/updateStatus0/:id", NVGHController.updateCancelHD)
router.get("/NVGH/getStatusHD/:id", NVGHController.getStatusHD)
router.get("/NVGH/getlisthd/:id", NVGHController.getListHD)

router.post("/NVQL/login", NVQLController.checkLoginNVQL)
router.get("/NVQL/dshd/:id", NVQLController.getListHD)
router.get("/NVQL/dsnv/:id", NVQLController.getListNVGH)
router.get("/NVQL/dssp/:id", NVQLController.getListSP)
module.exports = {
  routes: router,
};
