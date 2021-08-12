const nvData = require("../models/NVQT");

const addNhanVien = async (req, res, next) => {
    try {
      const data = req.body;
      const insert = await nvData.createNVQLK(data);
      res.send(insert);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

const getKH = async (req, res, next)  => {
  try {
    const page = req.params.page;
    const layKH = await nvData.getKhachHang(page);
    res.send(layKH);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getBDL_NVGH = async (req, res, next)  => {
  try {
    const page = req.params.page;
    //const ngay = req.body.ngay
    const getLuong = await nvData.getLuongNVGH(page);
    res.send(getLuong);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const SL_LSBDL_NVGH = async (req, res, next) => {
  try {
      const amount = await nvData.getAmountLSBD_NVGH();
      res.send(amount);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  const getBDL_NVQLK = async (req, res, next)  => {
    try {
      const page = req.params.page;
      //const ngay = req.body.ngay
      const getLuong = await nvData.getLuongNVQLK(page);
      res.send(getLuong);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  const SL_LSBDL_NVQLK = async (req, res, next) => {
    try {
        const amount = await nvData.getAmountLSBD_NVQLK();
        res.send(amount);
      } catch (error) {
        res.status(400).send(error.message);
      }
    }

  const layNVQLK = async (req, res, next)  => {
    try {
      const getNVQLK = await nvData.getNVQLK();
      res.send(getNVQLK);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  const xoaNVQLK = async (req, res, next) => {
    try {
      const MaNV = req.params.MaNV;
      const del = await nbData.deleteSP(MaNV);
      res.send(del);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

module.exports = {
    SL_LSBDL_NVGH,
    addNhanVien,
    getKH,
    getBDL_NVGH,
    getBDL_NVQLK,
    SL_LSBDL_NVQLK,
    layNVQLK,
    xoaNVQLK
};
