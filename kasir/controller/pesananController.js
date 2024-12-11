const { Pesanan } = require("../models");
const findPesanan = async (req, res) => {
  try {
    const data = await Pesanan.findAll();
    const result = {
      status: "200",
      data: data,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const findPesananbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Pesanan.findByPk(id);
    if (data === null) {
      res.json({
        status: 400,
        message: "data not found",
      });
    } else {
      res.json({
        status: "200",
        data: data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const createNewPesanan = async (req, res, next) => {
  const { nama } = req.body;
  try {
    const newPesanan = await Pesanan.create({ nama: nama });
    res.status(201).json({
      status: "ok",
      data: {
        id: newPesanan.id,
        nama: newPesanan.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updatePesananbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama } = req.body;
    const pesanan = await Pesanan.findByPk(id);
    if (!pesanan) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    pesanan.nama = nama;
    pesanan.updatedAt = new Date();

    await pesanan.validate();
    await pesanan.save();
    res.json({
      status: "success",
      data: {
        id: pesanan.id,
        nama: pesanan.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};
const deletePesananbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const pesanan = await Pesanan.findByPk(id);
    if (!pesanan) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    pesanan.destroy();
    res.json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  findPesanan,
  findPesananbyId,
  createNewPesanan,
  updatePesananbyId,
  deletePesananbyId,
};
