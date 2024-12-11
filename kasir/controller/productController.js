const { Product } = require("../models");
const findProduct = async (req, res) => {
  try {
    const data = await Product.findAll();
    const result = {
      status: "200",
      data: data,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const findProductbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Product.findByPk(id);
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

const createNewProduct = async (req, res, next) => {
  const { kode, nama, harga, is_ready, stok, gambar, categoryId } = req.body;
  try {
    const newProduct = await Product.create({
      kode: kode,
      nama: nama,
      harga: harga,
      is_ready: is_ready,
      stok: stok,
      gambar: gambar,
      categoryId: categoryId,
    });
    res.status(201).json({
      status: "ok",
      data: {
        id: newProduct.id,
        kode: newProduct.kode,
        nama: newProduct.nama,
        harga: newProduct.harga,
        stok: newProduct.stok,
        gambar: newProduct.gambar,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateCategorybyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { kode, nama, harga, is_ready, stok, gambar, categoryId } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    product.kode = kode;
    product.nama = nama;
    product.harga = harga;
    product.is_ready = is_ready;
    product.stok = stok;
    product.gambar = gambar;
    product.categoryId = categoryId;
    product.updatedAt = new Date();

    await product.validate();
    await product.save();
    res.json({
      status: "success",
      data: {
        id: product.id,
        kode: product.kode,
        nama: product.nama,
        harga: product.harga,
        stok: product.stok,
        gambar: product.gambar,
      },
    });
  } catch (error) {
    next(error);
  }
};
const deleteCategorybyId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    product.destroy();
    res.json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  findProduct,
  findProductbyId,
  createNewProduct,
  updateCategorybyId,
  deleteCategorybyId,
};
