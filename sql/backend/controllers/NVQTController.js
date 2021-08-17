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
};

const getBDL_NVGH = async (req, res, next)  => {
  try {
    const page = req.params.page;
    const getLuong = await nvData.getLuongNVGH(page);
    res.send(getLuong);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const SL_LSBDL_NVGH = async (req, res, next) => {
  try {
      const amount = await nvData.getAmountLSBD_NVGH();
      res.send(amount);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const getBDL_NVQLK = async (req, res, next)  => {
    try {
      const page = req.params.page;
      //const ngay = req.body.ngay
      const getLuong = await nvData.getLuongNVQLK(page);
      res.send(getLuong);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const SL_LSBDL_NVQLK = async (req, res, next) => {
    try {
        const amount = await nvData.getAmountLSBD_NVQLK();
        res.send(amount);
      } catch (error) {
        res.status(400).send(error.message);
      }
    };

  const layNVQLK = async (req, res, next)  => {
    try {
      const getNVQLK = await nvData.getNVQLK();
      res.send(getNVQLK);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const xoaNVQLK = async (req, res, next) => {
    try {
      const MaNV = req.params.MaNV;
      const del = await nvData.deleteNVQLK(MaNV);
      res.send(del);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const editNVQLK = async (req, res, next) => {
    try {
      const MaNV = req.params.MaNV;
      const data = req.body;
      const up = await nvData.updateNVQLK(MaNV, data);
      res.send(up);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const getNB = async (req, res, next) => {
    try {
      const page = req.params.page;
      const layNB = await nvData.getDSNB(page);
      res.send(layNB);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const editNB = async (req, res, next) => {
    try {
      const MaNhaBan = req.params.MaNhaBan;
      const data = req.body;
      const up = await nvData.updateNhaBan(MaNhaBan, data);
      res.send(up);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const updateAuth = async (req, res, next) => {
    try{
      const data = req.body;
      const MaNV = req.params.MaNV;
      const up = await nvData.updateAuthNVQLK(MaNV,data)

      res.send(up);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  const topKhachHang = async (req, res, next) => {
    try{
      const ngay = req.params.NgayLap;
      const up = await nvData.topKH(ngay)

      res.send(up);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  const taoKhuyenMai = async (req, res, next) => {
    try{
      const data = req.body;
      const km = await nvData.createPromo(data)

      res.send(km);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  const dsKho = async (req, res, next) => {
    try{
      const dsKho = await nvData.getKho();

      res.send(dsKho);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  const LogIn = async (req, res, next) => {
    try{
      const data = req.body;
      const LogIn = await nvData.DangNhap(data);
      
      res.send(LogIn);
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
    xoaNVQLK,
    editNVQLK,
    getNB,
    editNB,
    updateAuth,
    topKhachHang,
    taoKhuyenMai,
    dsKho,
    LogIn
};
