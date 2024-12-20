const { Category } = require("../models");
const findCategory = async (req, res) => {
  try {
    const data = await Category.findAll();
    const result = {
      status: "200",
      data: data,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const findCategorybyId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Category.findByPk(id);
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

const createNewCategory = async (req, res, next) => {
  const { nama } = req.body;
  try {
    const newCategory = await Category.create({ nama: nama });
    res.status(201).json({
      status: "ok",
      data: {
        id: newCategory.id,
        nama: newCategory.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateCategorybyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama } = req.body;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    category.nama = nama;
    category.updatedAt = new Date();

    await category.validate();
    await category.save();
    res.json({
      status: "success",
      data: {
        id: category.id,
        nama: category.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};
const deleteCategorybyId = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.json({
        status: "failed",
        message: "data is not exist",
      });
    }
    category.destroy();
    res.json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  findCategory,
  findCategorybyId,
  createNewCategory,
  updateCategorybyId,
  deleteCategorybyId,
};
