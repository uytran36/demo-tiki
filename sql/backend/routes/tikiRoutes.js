const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const nhaBanController = require("../controllers/nhaBanController");
const NVQTController = require("../controllers/NVQTController");
const router = express.Router();

router.post("/khachhang", khachHangController.getKHByEmail);
router.get("/amountkh", khachHangController.getAmountKhachHang);
router.post("/addkhachhang", khachHangController.addKhachHang);
router.put("/khuyenmai/:id", khachHangController.updateKhuyenMai);
router.get("/sanpham/:page", khachHangController.getSanPhamPage);
router.get("/ctsp/:id", khachHangController.getSanPhamID);

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

router.get("/NVQT/listNhaBan/:page", NVQTController.getNB)
router.put("/NVQT/editNB/:id", NVQTController.editNB)
router.delete("/NVQT/xoaNB/:MaNB", NVQTController.xoaNB)

module.exports = {
  routes: router,
};
