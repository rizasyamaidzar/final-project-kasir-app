const { Cart } = require("../models");
const { Product } = require("../models");
const product = require("../models/product");
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
  const { jumlah, total_harga, productId } = req.body;
  console.log(req.body);
  try {
    const newCart = await Cart.create({
      jumlah,
      total_harga,
      productId,
    });
    res.status(201).json({
      status: "ok",
      data: {
        id: newCart.id,
        jumlah: newCart.jumlah,
        total_harga: newCart.total_harga,
        productId: newCart.productId,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateCartbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { jumlah, total_harga, productId } = req.body;
    const cart = await Cart.findByPk(id);
    if (!cart) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    cart.jumlah = jumlah;
    cart.total_harga = total_harga;
    cart.updatedAt = new Date();

    await cart.validate();
    await cart.save();
    res.json({
      status: "success",
      data: {
        id: cart.id,
        jumlah: cart.jumlah,
        total_harga: cart.total_harga,
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

const searchProducts = async (req, res, next) => {
  const { productId } = req.query;
  try {
    const cart = await Cart.findAll({
      include: [
        {
          model: Product,
          as: "Product", // Pastikan menggunakan alias yang sama dengan di relasi
          where: productId ? { id: productId } : {}, // Filter jika kategori diberikan
          attributes: ["id", "nama", "harga", "stok", "gambar"], // Batasi atribut dari kategori
        },
      ],
    });

    if (cart.length === 0) {
      return res.json({
        status: "Failed",
        message: "No products found for the given cart",
        data: 0,
      });
    }

    res.json({
      status: 200,
      data: cart,
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
  searchProducts,
};
