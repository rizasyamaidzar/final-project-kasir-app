const { Meja } = require("../models");
const findMeja = async (req, res) => {
  try {
    const data = await Meja.findAll();
    const result = {
      status: "200",
      data: data,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const findMejabyId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Meja.findByPk(id);
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

const createNewMeja = async (req, res, next) => {
  const { nama } = req.body;
  try {
    const newMeja = await Meja.create({ nama: nama });
    res.status(201).json({
      status: "ok",
      data: {
        id: newMeja.id,
        nama: newMeja.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateMejabyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama } = req.body;
    const meja = await Meja.findByPk(id);
    if (!meja) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    meja.nama = nama;
    meja.updatedAt = new Date();

    await meja.validate();
    await meja.save();
    res.json({
      status: "success",
      data: {
        id: meja.id,
        nama: meja.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};
const deleteMejabyId = async (req, res) => {
  try {
    const { id } = req.params;
    const meja = await Meja.findByPk(id);
    if (!meja) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    meja.destroy();
    res.json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  findMeja,
  findMejabyId,
  createNewMeja,
  updateMejabyId,
  deleteMejabyId,
};
