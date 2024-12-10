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

// const createNewBook = async (req, res, next) => {
//   const { nama, jumlah } = req.body;
//   // const lastItemBookId = books[books.length - 1].id;
//   // const newBookId = lastItemBookId + 1;
//   // const newBookData = { id: newBookId, title: title, jumlah: jumlah };
//   // books.push(newBookData);

//   // const result = {
//   //   status: 200,
//   //   message: "success added Book",
//   //   data: newBookData,
//   // };
//   // res.json(result);
//   try {
//     const newBook = await Book.create({ nama: nama, jumlah: jumlah });
//     res.status(201).json({
//       status: "ok",
//       data: {
//         id: newBook.id,
//         nama: newBook.nama,
//         jumlah: newBook.jumlah,
//         createdAt: newBook.createdAt,
//         updatedAt: newBook.updatedAt,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// const updateBooksbyId = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { nama, jumlah } = req.body;
//     const book = await Book.findByPk(id);
//     if (!book) {
//       return res.json({
//         status: "failed",
//         message: "data is not exist",
//       });
//     }
//     book.nama = nama;
//     book.jumlah = jumlah;
//     book.updatedAt = new Date();

//     await book.validate();
//     await book.save();
//     res.json({
//       status: "success",
//       data: {
//         id: book.id,
//         nama: book.nama,
//         jumlah: book.jumlah,
//         updatedAt: book.updatedAt,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// const deleteBooksbyId = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findByPk(id);
//     if (!book) {
//       return res.json({
//         status: "failed",
//         message: "data is not exist",
//       });
//     }
//     book.destroy();
//     res.json({
//       status: "success",
//     });
//   } catch (error) {
//     next(error);
//   }
// };
module.exports = {
  findCategory,
  findCategorybyId,
  //   createNewBook,
  //   updateBooksbyId,
  //   deleteBooksbyId,
};
