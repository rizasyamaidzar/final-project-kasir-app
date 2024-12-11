const { Cart } = require("../models");
const findCart = async (req, res) => {
  try {
    const data = await Cart.findAll();
    const result = {
      status: "200",
      data: data,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const findCartbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Cart.findByPk(id);
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

const createNewCart = async (req, res, next) => {
  const { nama } = req.body;
  try {
    const newCart = await Cart.create({ nama: nama });
    res.status(201).json({
      status: "ok",
      data: {
        id: newCart.id,
        nama: newCart.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateCartbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama } = req.body;
    const cart = await Cart.findByPk(id);
    if (!cart) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    cart.nama = nama;
    cart.updatedAt = new Date();

    await cart.validate();
    await cart.save();
    res.json({
      status: "success",
      data: {
        id: cart.id,
        nama: cart.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};
const deleteCartbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByPk(id);
    if (!cart) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    cart.destroy();
    res.json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  findCart,
  findCartbyId,
  createNewCart,
  updateCartbyId,
  deleteCartbyId,
};
