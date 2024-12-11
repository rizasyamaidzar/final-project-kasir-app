const { Checkout } = require("../models");
const findCheckout = async (req, res) => {
  try {
    const data = await Checkout.findAll();
    const result = {
      status: "200",
      data: data,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const findCheckoutbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Checkout.findByPk(id);
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

const createNewCheckout = async (req, res, next) => {
  const { nama } = req.body;
  try {
    const newCheckout = await Checkout.create({ nama: nama });
    res.status(201).json({
      status: "ok",
      data: {
        id: newCheckout.id,
        nama: newCheckout.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateCheckoutbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama } = req.body;
    const checkout = await Checkout.findByPk(id);
    if (!checkout) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    checkout.nama = nama;
    checkout.updatedAt = new Date();

    await checkout.validate();
    await checkout.save();
    res.json({
      status: "success",
      data: {
        id: checkout.id,
        nama: checkout.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};
const deleteCheckoutbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const checkout = await Checkout.findByPk(id);
    if (!checkout) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    checkout.destroy();
    res.json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  findCheckout,
  findCheckoutbyId,
  createNewCheckout,
  updateCheckoutbyId,
  deleteCheckoutbyId,
};
